import { Router, type IRouter } from "express";
import { db, subscribersTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { z } from "zod";

const router: IRouter = Router();

const subscribeBodySchema = z.object({
  email: z.string().email(),
});

router.post("/newsletter/subscribe", async (req, res) => {
  const parsed = subscribeBodySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(422).json({ error: "Invalid email address" });
    return;
  }

  const { email } = parsed.data;

  try {
    const existing = await db
      .select({ id: subscribersTable.id })
      .from(subscribersTable)
      .where(eq(subscribersTable.email, email))
      .limit(1);

    if (existing.length > 0) {
      res.status(409).json({ error: "This email is already subscribed" });
      return;
    }

    await db.insert(subscribersTable).values({ email });
    req.log.info({ email }, "New newsletter subscriber");

    res.status(201).json({ success: true, message: "Thanks for subscribing!" });
  } catch (err) {
    req.log.error({ err }, "Failed to subscribe email");
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
