import { env } from "./dotenv.js";

export const accessTokenCookieOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "none" as const,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
};

export const refreshTokenCookieOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "none" as const,
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};