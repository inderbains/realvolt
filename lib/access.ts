export type RealVoltRole =
  | "owner"
  | "admin"
  | "broker"
  | "managing_broker"
  | "back_office"
  | "backoffice"
  | "accountant"
  | "office_admin"
  | "team_lead"
  | "agent"
  | "realtor"
  | "viewer";

export const BROKERAGE_ONLY_ROLES = new Set<RealVoltRole>([
  "owner","admin","broker","managing_broker","back_office","backoffice","accountant","office_admin"
]);

export function canOpenBackOffice(role?: string | null) {
  return !!role && BROKERAGE_ONLY_ROLES.has(role.toLowerCase() as RealVoltRole);
}

export const PLAN_FEATURES = {
  crm: ["crm", "pipeline", "clients", "open_houses", "forms", "property_pages", "automations", "integrations"],
  team: ["crm", "pipeline", "clients", "open_houses", "forms", "property_pages", "automations", "integrations", "team"],
  brokerage: ["crm", "pipeline", "clients", "open_houses", "forms", "property_pages", "automations", "integrations", "team", "transactions", "back_office", "trust_accounting", "reports", "documents", "esign"]
} as const;
