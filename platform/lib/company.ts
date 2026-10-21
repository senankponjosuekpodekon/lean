export const company = {
  name: "Velmora Finanz",
  legalForm: "",
  street: "",
  zip: "",
  city: "",
  country: "Deutschland",
  representative: "",
  phone: "",
  email: "kontakt@velmora-finanz.de",
  website: "www.velmora-finanz.de",
  registerCourt: "",
  registerNumber: "",
  vatId: "",
  brokerRegistration: "",
  supervisoryAuthority: "",
};

export const companyDisplayName = [company.name, company.legalForm].filter(Boolean).join(" ");
export const companyCityLine = [company.zip, company.city].filter(Boolean).join(" ");
