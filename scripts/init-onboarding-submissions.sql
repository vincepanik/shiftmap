CREATE TABLE IF NOT EXISTS onboarding_submissions (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT NOT NULL,
  company_name TEXT,
  sector TEXT,
  headcount TEXT,
  revenue TEXT,
  current_tools TEXT,
  main_challenges TEXT,
  ai_maturity TEXT,
  priority_departments TEXT[],
  ai_budget TEXT,
  offer_purchased TEXT
);
