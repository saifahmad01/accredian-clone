import { NextResponse } from "next/server";

/* ---------------- Types ---------------- */

interface LeadPayload {
  name: string;
  email: string;
  company: string;
}

/* ---------------- Utils ---------------- */

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLead(data: Partial<LeadPayload>) {
  if (!data.name || !data.email || !data.company) {
    return "Name, email, and company are required.";
  }

  if (!isValidEmail(data.email)) {
    return "Invalid email format.";
  }

  return null;
}

/* ---------------- Handler ---------------- */

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<LeadPayload>;

    // Validate input
    const error = validateLead(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const lead: LeadPayload = {
      name: body.name!.trim(),
      email: body.email!.toLowerCase().trim(),
      company: body.company!.trim(),
    };

    // TODO: Replace with real persistence layer
    // await db.leads.create({ data: lead });

    // Simulate async operation
    await new Promise((r) => setTimeout(r, 800));

    console.log("Lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully." },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/leads failed:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}