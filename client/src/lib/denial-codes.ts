export interface DenialCodeMapping {
  code: string;
  description: string;
  questions: string[];
  requiredFields: string[];
  nextSteps: string[];
}

export const denialCodeMappings: Record<string, DenialCodeMapping> = {
  "CO-4": {
    code: "CO-4",
    description: "The procedure code is inconsistent with the modifier used or a required modifier is missing",
    questions: [
      "Which modifier was used or is missing?",
      "Is the procedure code correct for the service provided?",
      "What documentation supports the modifier usage?",
      "Does the modifier match the diagnosis?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review modifier requirements",
      "Verify procedure code accuracy",
      "Prepare corrected claim for resubmission"
    ]
  },
  "CO-6": {
    code: "CO-6",
    description: "The procedure/revenue code is inconsistent with the patient's age",
    questions: [
      "What is the patient's age?",
      "Is the procedure code age-appropriate?",
      "Are there alternative procedure codes for this age group?",
      "Is there documentation supporting the service for this age?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify patient age in records",
      "Review age-appropriate procedure codes",
      "Submit corrected claim if necessary"
    ]
  },
  "CO-11": {
    code: "CO-11",
    description: "The diagnosis is inconsistent with the procedure",
    questions: [
      "What diagnosis codes were submitted?",
      "Do the diagnosis codes support the procedure?",
      "Is there a more appropriate diagnosis code?",
      "Is additional documentation needed to support the procedure?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review diagnosis and procedure code relationship",
      "Gather supporting medical documentation",
      "Consider alternative diagnosis codes"
    ]
  },
  "CO-15": {
    code: "CO-15",
    description: "The authorization number is missing, invalid, or does not apply to the billed services or provider",
    questions: [
      "Was prior authorization obtained?",
      "What is the authorization number and expiration date?",
      "Does the authorization cover the specific service?",
      "Is the authorization for the correct provider?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify authorization requirements",
      "Obtain valid authorization if needed",
      "Resubmit with correct authorization number"
    ]
  },
  "CO-16": {
    code: "CO-16",
    description: "Claim/service lacks information or has submission/billing error(s)",
    questions: [
      "What specific information is missing?",
      "What type of billing error was identified?",
      "Can the claim be corrected and resubmitted?",
      "What documentation is needed for resubmission?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Identify missing information",
      "Correct billing errors",
      "Prepare for claim resubmission"
    ]
  },
  "CO-18": {
    code: "CO-18",
    description: "Duplicate claim/service",
    questions: [
      "What is the original claim number or date of submission?",
      "Was the previous claim paid or processed?",
      "Is this a true duplicate or a resubmission?",
      "Should we void one of the claims?"
    ],
    requiredFields: ["dateOfService", "repName", "callReference"],
    nextSteps: [
      "Verify original claim status",
      "Determine appropriate action",
      "Process duplicate resolution"
    ]
  },
  "CO-22": {
    code: "CO-22",
    description: "This care may be covered by another payer per coordination of benefits",
    questions: [
      "What other insurance does the patient have?",
      "Which payer should be primary?",
      "Has the primary insurance been billed first?",
      "What is the coordination of benefits order?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify insurance coordination",
      "Bill primary payer first",
      "Update billing sequence"
    ]
  },
  "CO-23": {
    code: "CO-23",
    description: "The impact of prior payer(s) adjudication including payments and/or adjustments",
    questions: [
      "What was the primary payer's payment amount?",
      "Were there any adjustments from the primary payer?",
      "What is the remaining patient responsibility?",
      "Should this be billed to secondary insurance?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review primary payer adjudication",
      "Calculate remaining balance",
      "Bill secondary payer if applicable"
    ]
  },
  "CO-27": {
    code: "CO-27",
    description: "Expenses incurred after coverage terminated",
    questions: [
      "What was the patient's eligibility status on the date of service?",
      "Was the plan active on the date of service?",
      "What is the effective and termination date of coverage?",
      "Is there any possibility of retroactive coverage?"
    ],
    requiredFields: ["eligibilityStatus", "eligibilityFromDate", "dateOfService", "repName"],
    nextSteps: [
      "Document termination date in patient record",
      "Generate final comment for RCM system",
      "Mark account for patient notification"
    ]
  },
  "CO-29": {
    code: "CO-29",
    description: "The time limit for filing has expired",
    questions: [
      "What is the filing deadline for this payer?",
      "When was the service originally provided?",
      "Are there any exceptions or appeals available?",
      "Was there a delay in receiving necessary documentation?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Document filing timeline",
      "Check for appeal options",
      "Review timely filing policies"
    ]
  },
  "CO-31": {
    code: "CO-31",
    description: "Patient cannot be identified as our insured",
    questions: [
      "Is the member ID number correct?",
      "Has the patient's name changed recently?",
      "Is the date of birth accurate?",
      "Are there any aliases or alternate spellings?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify patient demographics",
      "Check for name changes or aliases",
      "Obtain updated insurance information"
    ]
  },
  "CO-45": {
    code: "CO-45",
    description: "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement",
    questions: [
      "What is the contracted rate for this service?",
      "Is this the correct procedure code?",
      "Are there any modifiers that should be applied?",
      "Is the provider in-network or out-of-network?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review fee schedule",
      "Verify procedure coding",
      "Check contract terms"
    ]
  },
  "CO-50": {
    code: "CO-50",
    description: "These are non-covered services because this is not deemed a 'medical necessity'",
    questions: [
      "What criteria was used to determine medical necessity?",
      "Is there additional documentation that supports necessity?",
      "Was a peer-to-peer review conducted?",
      "Are there appeal options available?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Gather additional medical documentation",
      "Consider peer-to-peer review",
      "Prepare appeal if warranted"
    ]
  },
  "CO-96": {
    code: "CO-96",
    description: "Non-covered charge(s). At least one Remark Code must be provided",
    questions: [
      "What specific remark codes were provided?",
      "Why is this service considered non-covered?",
      "Are there any covered alternatives?",
      "Is this a plan exclusion or limitation?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review remark codes",
      "Check plan benefits",
      "Explore alternatives"
    ]
  },
  "CO-97": {
    code: "CO-97",
    description: "The benefit for this service is included in the payment/allowance for another service/procedure",
    questions: [
      "Which primary service was this bundled with?",
      "Was the bundled service paid correctly?",
      "Is there documentation showing separate services?",
      "What is the bundling policy for this procedure?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review bundling documentation",
      "Verify primary service payment status",
      "Document bundling rationale"
    ]
  },
  "CO-109": {
    code: "CO-109",
    description: "Claim not covered by this payer/contractor. You must send the claim to the correct payer/contractor",
    questions: [
      "Which payer should receive this claim?",
      "What insurance information do we have on file?",
      "Has the patient's coverage changed?",
      "Do we need updated insurance cards?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify correct payer",
      "Update insurance information",
      "Resubmit to appropriate payer"
    ]
  },
  "CO-151": {
    code: "CO-151",
    description: "Payment adjusted because the payer deems the information submitted does not support this many/frequency of services",
    questions: [
      "What frequency limits apply to this service?",
      "How many units were billed versus allowed?",
      "Is there documentation supporting medical necessity?",
      "Are there any diagnosis codes that would support additional units?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review frequency guidelines",
      "Gather supporting documentation",
      "Consider appeal if warranted"
    ]
  },
  "CO-167": {
    code: "CO-167",
    description: "This (these) diagnosis(es) is (are) not covered",
    questions: [
      "Which specific diagnosis codes were denied?",
      "Are there alternative diagnosis codes that would be covered?",
      "Is there additional documentation to support the diagnosis?",
      "Does the plan have specific exclusions for this condition?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review covered diagnosis list",
      "Consider alternative diagnosis codes",
      "Gather supporting documentation"
    ]
  },
  "CO-170": {
    code: "CO-170",
    description: "Payment is denied when performed/billed by this type of provider",
    questions: [
      "What type of provider performed the service?",
      "Is the provider credentialed for this service?",
      "Are there provider type restrictions for this procedure?",
      "Can the service be performed by a different provider type?"
    ],
    requiredFields: ["dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Verify provider credentials",
      "Check service restrictions by provider type",
      "Consider referral to appropriate provider"
    ]
  },
  "PR-1": {
    code: "PR-1",
    description: "Deductible amount",
    questions: [
      "What is the patient's annual deductible?",
      "How much has been met this year?",
      "Is this in-network or out-of-network deductible?",
      "Should we bill the patient for this amount?"
    ],
    requiredFields: ["dateOfService", "repName", "eligibilityStatus"],
    nextSteps: [
      "Verify deductible information",
      "Calculate patient responsibility",
      "Generate patient statement"
    ]
  },
  "PR-2": {
    code: "PR-2",
    description: "Coinsurance amount",
    questions: [
      "What is the patient's coinsurance percentage?",
      "Is this based on allowed amount or billed charges?",
      "Are there any out-of-pocket maximums to consider?",
      "Should we collect this from the patient?"
    ],
    requiredFields: ["dateOfService", "repName", "eligibilityStatus"],
    nextSteps: [
      "Calculate coinsurance accurately",
      "Verify out-of-pocket limits",
      "Bill patient appropriately"
    ]
  },
  "PR-3": {
    code: "PR-3",
    description: "Copayment amount",
    questions: [
      "What is the standard copay for this type of service?",
      "Was the copay collected at time of service?",
      "Are there any copay exemptions for this patient?",
      "Should we pursue collection of outstanding copay?"
    ],
    requiredFields: ["dateOfService", "repName", "eligibilityStatus"],
    nextSteps: [
      "Verify copay requirements",
      "Check payment history",
      "Follow up on collections"
    ]
  },
  "PR-204": {
    code: "PR-204",
    description: "This service/equipment/drug is not covered under the patient's current benefit plan",
    questions: [
      "Is prior authorization required for this service?",
      "What is the patient's current benefit plan?",
      "Are there any covered alternatives?",
      "Is this service excluded from the plan?"
    ],
    requiredFields: ["eligibilityStatus", "dateOfService", "repName", "additionalNotes"],
    nextSteps: [
      "Review benefit plan documentation",
      "Check for prior authorization requirements",
      "Notify patient of coverage limitations"
    ]
  }
};

export const insuranceOptions = [
  { value: "aetna", label: "Aetna" },
  { value: "amerigroup", label: "Amerigroup" },
  { value: "anthem", label: "Anthem" },
  { value: "bcbs", label: "Blue Cross Blue Shield" },
  { value: "centene", label: "Centene" },
  { value: "cigna", label: "Cigna" },
  { value: "coventry", label: "Coventry Health Care" },
  { value: "elevance", label: "Elevance Health" },
  { value: "healthnet", label: "Health Net" },
  { value: "humana", label: "Humana" },
  { value: "independence", label: "Independence Blue Cross" },
  { value: "kaiser", label: "Kaiser Permanente" },
  { value: "medicaid", label: "Medicaid" },
  { value: "medicare", label: "Medicare" },
  { value: "molina", label: "Molina Healthcare" },
  { value: "oscar", label: "Oscar Health" },
  { value: "tricare", label: "TRICARE" },
  { value: "uhc", label: "United Healthcare (UHC)" },
  { value: "wellcare", label: "WellCare" },
  { value: "other", label: "Other" }
].sort((a, b) => a.label.localeCompare(b.label));

export const eligibilityStatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "terminated", label: "Terminated" },
  { value: "pending", label: "Pending" },
  { value: "unknown", label: "Unknown" }
];

// Helper function to analyze and parse Q&A format responses
function parseQAResponse(notes: string, denialCode: string): string {
  if (!notes || notes.trim().length === 0) return "";
  
  // Check if this looks like a Q&A response (contains common patterns)
  const qaPatterns = [
    /medicare/i, /mcr/i, /aetna/i, /no.*billed/i, /primary/i, /secondary/i,
    /1st/i, /2nd/i, /never.*billed/i, /cob/i, /coordination/i
  ];
  
  const hasQAFormat = qaPatterns.some(pattern => pattern.test(notes));
  
  if (hasQAFormat && denialCode === 'CO-22') {
    // Specifically handle CO-22 (COB) responses
    return parseCoordinationOfBenefitsResponse(notes);
  }
  
  // Fall back to general improvement
  return improveAdditionalNotes(notes);
}

// Specific parser for CO-22 (Coordination of Benefits) responses
function parseCoordinationOfBenefitsResponse(notes: string): string {
  const lowerNotes = notes.toLowerCase();
  
  // Extract insurance information
  const insuranceNames = [];
  if (lowerNotes.includes('medicare') || lowerNotes.includes('mcr')) {
    insuranceNames.push('Medicare');
  }
  if (lowerNotes.includes('aetna')) {
    insuranceNames.push('Aetna');
  }
  if (lowerNotes.includes('bcbs') || lowerNotes.includes('blue cross')) {
    insuranceNames.push('Blue Cross Blue Shield');
  }
  if (lowerNotes.includes('uhc') || lowerNotes.includes('united')) {
    insuranceNames.push('United Healthcare');
  }
  
  // Determine primary insurance
  let primaryInsurance = '';
  if (lowerNotes.includes('medicare') && (lowerNotes.includes('primary') || lowerNotes.includes('1st'))) {
    primaryInsurance = 'Medicare';
  } else if (insuranceNames.length > 0) {
    primaryInsurance = insuranceNames[0];
  }
  
  // Check if primary was billed first
  const primaryNotBilled = lowerNotes.includes('never billed') || 
                          lowerNotes.includes('not billed') || 
                          lowerNotes.includes('no prim');
  
  // Build intelligent response
  let response = '';
  
  if (insuranceNames.length > 1) {
    response = `Patient has ${insuranceNames.join(' and ')}. `;
  } else if (insuranceNames.length === 1) {
    response = `Patient has ${insuranceNames[0]}. `;
  }
  
  if (primaryInsurance) {
    response += `${primaryInsurance} should be primary`;
    if (primaryNotBilled) {
      response += ', but it was not billed first. ';
    } else {
      response += '. ';
    }
  }
  
  if (insuranceNames.length > 1) {
    const secondary = insuranceNames.find(name => name !== primaryInsurance);
    if (secondary) {
      response += `COB order is ${primaryInsurance} primary, then ${secondary} secondary.`;
    }
  }
  
  return response || improveAdditionalNotes(notes);
}

// Helper function to clean and improve additional notes
function improveAdditionalNotes(notes: string): string {
  if (!notes || notes.trim().length === 0) return "";
  
  // Common abbreviations and improvements
  const improvements = {
    'dup': 'duplicate',
    'prev': 'previous',
    'claiim': 'claim',
    'suibmit': 'submitted',
    'submited': 'submitted',
    'recieved': 'received',
    'payed': 'paid',
    'approvel': 'approval',
    'authorizaton': 'authorization',
    'necesary': 'necessary',
    'seperately': 'separately',
    'seperete': 'separate',
    'w/': 'with',
    'pt': 'patient',
    'dx': 'diagnosis',
    'proc': 'procedure',
    'auth': 'authorization',
    'pre-auth': 'pre-authorization',
    'reimb': 'reimbursement',
    'coord': 'coordination',
    'benefts': 'benefits',
    'eligibilty': 'eligibility',
    'mcr': 'Medicare',
    'prim': 'primary',
    'biled': 'billed'
  };
  
  let improved = notes.toLowerCase().trim();
  
  // Apply word improvements
  Object.entries(improvements).forEach(([wrong, correct]) => {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
    improved = improved.replace(regex, correct);
  });
  
  // Fix common patterns
  improved = improved
    .replace(/\bno\s+void\s+any\s+claim\b/gi, 'do not void any claims')
    .replace(/\byes\s+true\s+duplicate\b/gi, 'confirmed true duplicate')
    .replace(/\bother\s+claim\s*#\s*(\d+)/gi, 'other claim #$1')
    .replace(/\bsubmit\s+on\s+(\d{8})/gi, (match, date) => {
      // Convert DDMMYYYY to MM/DD/YYYY
      if (date.length === 8) {
        const day = date.substring(0, 2);
        const month = date.substring(2, 4);
        const year = date.substring(4, 8);
        return `submitted on ${month}/${day}/${year}`;
      }
      return match;
    })
    .replace(/\bpaid\s+out\b/gi, 'paid in full')
    .replace(/\s+/g, ' ') // Clean multiple spaces
    .trim();
  
  // Capitalize first letter
  improved = improved.charAt(0).toUpperCase() + improved.slice(1);
  
  // Ensure it ends with proper punctuation
  if (!improved.match(/[.!?]$/)) {
    improved += '.';
  }
  
  return improved;
}

// Intelligent parser for additional notes to extract key details
function parseIntelligentNotes(notes: string, denialCode: string): {
  originalClaim?: string;
  paidDate?: string;
  needsVoid?: boolean;
  additionalInfo?: string;
  primaryInsurance?: string;
  secondaryInsurance?: string;
  billingOrder?: string;
} {
  if (!notes || notes.trim().length === 0) return {};
  
  const result: any = {};
  const lowerNotes = notes.toLowerCase();
  
  // Extract claim numbers - look for patterns like "clm@1213422", "claim #2323433", etc.
  const claimPatterns = [
    /clm@(\d+)/i,
    /claim\s*#?(\d+)/i,
    /original\s*claim\s*#?(\d+)/i,
    /org\s*clm@(\d+)/i,
    /previous\s*claim\s*#?(\d+)/i
  ];
  
  for (const pattern of claimPatterns) {
    const match = notes.match(pattern);
    if (match) {
      result.originalClaim = match[1];
      break;
    }
  }
  
  // Extract payment dates - look for patterns like "paid on 3/24/25", "paid 3/24/25", etc.
  const datePatterns = [
    /paid\s*on\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i,
    /paid\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i,
    /processed\s*on\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i,
    /processed\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i
  ];
  
  for (const pattern of datePatterns) {
    const match = notes.match(pattern);
    if (match) {
      result.paidDate = match[1];
      break;
    }
  }
  
  // Check if void is needed
  const voidKeywords = ['void', 'need to void', 'must void', 'should void', 'we need to void'];
  result.needsVoid = voidKeywords.some(keyword => lowerNotes.includes(keyword));
  
  // Extract insurance information and billing order
  const insuranceNames = extractInsuranceNames(notes);
  
  // Parse denial code specific information
  switch (denialCode) {
    case 'CO-18':
      // For duplicates, check for confirmation language
      if (lowerNotes.includes('true dup') || lowerNotes.includes('confirmed dup') || lowerNotes.includes('yes true')) {
        // Already handled in the main logic
      }
      break;
      
    case 'CO-22':
      // Parse COB (Coordination of Benefits) information
      const cobInfo = parseCOBInformation(notes, lowerNotes, insuranceNames);
      result.primaryInsurance = cobInfo.primary;
      result.secondaryInsurance = cobInfo.secondary;
      result.billingOrder = cobInfo.billingOrder;
      result.additionalInfo = cobInfo.additionalInfo;
      break;
      
    case 'CO-29':
      // Parse timely filing information
      const tflInfo = parseTimelyFilingInformation(notes, lowerNotes);
      result.additionalInfo = tflInfo.additionalInfo;
      break;
      
    case 'CO-15':
      // Parse authorization information
      const authInfo = parseAuthorizationInformation(notes, lowerNotes);
      result.additionalInfo = authInfo.additionalInfo;
      break;
      
    case 'CO-50':
      // Parse medical necessity information
      const medNecInfo = parseMedicalNecessityInformation(notes, lowerNotes);
      result.additionalInfo = medNecInfo.additionalInfo;
      break;
      
    case 'CO-4':
      // Parse modifier information
      const modifierInfo = parseModifierInformation(notes, lowerNotes);
      result.additionalInfo = modifierInfo.additionalInfo;
      break;
      
    case 'CO-6':
      // Parse age restriction information
      const ageInfo = parseAgeRestrictionInformation(notes, lowerNotes);
      result.additionalInfo = ageInfo.additionalInfo;
      break;
      
    case 'CO-11':
      // Parse diagnosis/procedure mismatch information
      const diagnosisInfo = parseDiagnosisProcedureInformation(notes, lowerNotes);
      result.additionalInfo = diagnosisInfo.additionalInfo;
      break;
      
    case 'CO-16':
      // Parse missing/incorrect information
      const missingInfo = parseMissingInformationDetails(notes, lowerNotes);
      result.additionalInfo = missingInfo.additionalInfo;
      break;
      
    case 'CO-23':
      // Parse prior payer adjudication information
      const priorPayerInfo = parsePriorPayerInformation(notes, lowerNotes);
      result.additionalInfo = priorPayerInfo.additionalInfo;
      break;
      
    case 'CO-27':
      // Parse eligibility termination information
      const eligibilityInfo = parseEligibilityInformation(notes, lowerNotes);
      result.additionalInfo = eligibilityInfo.additionalInfo;
      break;
      
    case 'CO-31':
      // Parse patient identification information
      const patientIdInfo = parsePatientIdInformation(notes, lowerNotes);
      result.additionalInfo = patientIdInfo.additionalInfo;
      break;
      
    case 'CO-45':
      // Parse fee schedule information
      const feeScheduleInfo = parseFeeScheduleInformation(notes, lowerNotes);
      result.additionalInfo = feeScheduleInfo.additionalInfo;
      break;
      
    case 'CO-96':
      // Parse non-covered service information
      const nonCoveredInfo = parseNonCoveredInformation(notes, lowerNotes);
      result.additionalInfo = nonCoveredInfo.additionalInfo;
      break;
      
    case 'CO-97':
      // Parse bundled service information
      const bundledInfo = parseBundledInformation(notes, lowerNotes);
      result.additionalInfo = bundledInfo.additionalInfo;
      break;
      
    case 'CO-109':
      // Parse wrong payer information
      const wrongPayerInfo = parseWrongPayerInformation(notes, lowerNotes);
      result.additionalInfo = wrongPayerInfo.additionalInfo;
      break;
      
    case 'CO-151':
      // Parse frequency limit information
      const frequencyInfo = parseFrequencyInformation(notes, lowerNotes);
      result.additionalInfo = frequencyInfo.additionalInfo;
      break;
      
    case 'CO-167':
      // Parse diagnosis not covered information
      const diagnosisNotCoveredInfo = parseDiagnosisNotCoveredInformation(notes, lowerNotes);
      result.additionalInfo = diagnosisNotCoveredInfo.additionalInfo;
      break;
      
    case 'CO-170':
      // Parse provider type restriction information
      const providerTypeInfo = parseProviderTypeInformation(notes, lowerNotes);
      result.additionalInfo = providerTypeInfo.additionalInfo;
      break;
      
    case 'PR-1':
      // Parse deductible information
      const deductibleInfo = parseDeductibleInformation(notes, lowerNotes);
      result.additionalInfo = deductibleInfo.additionalInfo;
      break;
      
    case 'PR-2':
      // Parse coinsurance information
      const coinsuranceInfo = parseCoinsuranceInformation(notes, lowerNotes);
      result.additionalInfo = coinsuranceInfo.additionalInfo;
      break;
      
    case 'PR-3':
      // Parse copay information
      const copayInfo = parseCopayInformation(notes, lowerNotes);
      result.additionalInfo = copayInfo.additionalInfo;
      break;
      
    case 'PR-204':
      // Parse service not covered information
      const serviceNotCoveredInfo = parseServiceNotCoveredInformation(notes, lowerNotes);
      result.additionalInfo = serviceNotCoveredInfo.additionalInfo;
      break;
      
    default:
      // For other codes, try to extract general meaningful information
      const generalInfo = parseGeneralInformation(notes, lowerNotes);
      if (generalInfo.additionalInfo) {
        result.additionalInfo = generalInfo.additionalInfo;
      }
      break;
  }
  
  return result;
}

// Helper function to extract insurance names from text
function extractInsuranceNames(text: string): string[] {
  const insurancePatterns = [
    { pattern: /\baetna\b/i, name: 'Aetna' },
    { pattern: /\bbcbs\b|\bblue\s*cross\b/i, name: 'BCBS' },
    { pattern: /\buhc\b|\bunited\s*health/i, name: 'UHC' },
    { pattern: /\bmedicare\b|\bmcr\b/i, name: 'Medicare' },
    { pattern: /\bmedicaid\b/i, name: 'Medicaid' },
    { pattern: /\bcigna\b/i, name: 'Cigna' },
    { pattern: /\bhumana\b/i, name: 'Humana' },
    { pattern: /\bhealth\s*net\b|\bhealthnet\b/i, name: 'Health Net' },
    { pattern: /\bkp\b|\bkaiser\b/i, name: 'Kaiser' },
    { pattern: /\banthem\b/i, name: 'Anthem' }
  ];
  
  const found = [];
  for (const { pattern, name } of insurancePatterns) {
    if (pattern.test(text)) {
      found.push(name);
    }
  }
  return found;
}

// Helper function to parse COB (Coordination of Benefits) information
function parseCOBInformation(originalText: string, lowerText: string, insuranceNames: string[]): {
  primary?: string;
  secondary?: string;
  billingOrder?: string;
  additionalInfo?: string;
} {
  const result: any = {};
  
  // Determine primary insurance
  let primaryInsurance = '';
  let secondaryInsurance = '';
  
  // Look for explicit primary indicators
  const primaryPatterns = [
    /(\w+(?:\s+\w+)*)\s+(?:is\s+)?primary/i,
    /primary\s+(?:is\s+)?(\w+(?:\s+\w+)*)/i,
    /(\w+(?:\s+\w+)*)\s+(?:should be|must be)\s+primary/i,
    /bill\s+(\w+(?:\s+\w+)*)\s+first/i,
    /(\w+(?:\s+\w+)*)\s+then\s+/i
  ];
  
  for (const pattern of primaryPatterns) {
    const match = originalText.match(pattern);
    if (match) {
      const candidate = match[1].trim();
      // Check if this matches one of our known insurance names
      const matchedInsurance = insuranceNames.find(ins => 
        candidate.toLowerCase().includes(ins.toLowerCase()) || 
        ins.toLowerCase().includes(candidate.toLowerCase())
      );
      if (matchedInsurance) {
        primaryInsurance = matchedInsurance;
        break;
      }
    }
  }
  
  // Look for secondary insurance
  const secondaryPatterns = [
    /then\s+(\w+(?:\s+\w+)*)/i,
    /secondary\s+(?:is\s+)?(\w+(?:\s+\w+)*)/i,
    /(\w+(?:\s+\w+)*)\s+(?:is\s+)?secondary/i
  ];
  
  for (const pattern of secondaryPatterns) {
    const match = originalText.match(pattern);
    if (match) {
      const candidate = match[1].trim();
      const matchedInsurance = insuranceNames.find(ins => 
        candidate.toLowerCase().includes(ins.toLowerCase()) || 
        ins.toLowerCase().includes(candidate.toLowerCase())
      );
      if (matchedInsurance && matchedInsurance !== primaryInsurance) {
        secondaryInsurance = matchedInsurance;
        break;
      }
    }
  }
  
  // If we have multiple insurances but no explicit primary, use context clues
  if (!primaryInsurance && insuranceNames.length >= 2) {
    // Check for "never billed" patterns
    const neverBilledPatterns = [
      /never\s+billed\s+(?:to\s+)?(\w+(?:\s+\w+)*)/i,
      /(?:was\s+)?not\s+billed\s+(?:to\s+)?(\w+(?:\s+\w+)*)/i,
      /(\w+(?:\s+\w+)*)\s+(?:was\s+)?never\s+billed/i
    ];
    
    for (const pattern of neverBilledPatterns) {
      const match = originalText.match(pattern);
      if (match) {
        const candidate = match[1].trim();
        const matchedInsurance = insuranceNames.find(ins => 
          candidate.toLowerCase().includes(ins.toLowerCase()) || 
          ins.toLowerCase().includes(candidate.toLowerCase())
        );
        if (matchedInsurance) {
          primaryInsurance = matchedInsurance;
          secondaryInsurance = insuranceNames.find(ins => ins !== primaryInsurance) || '';
          break;
        }
      }
    }
  }
  
  // Build billing order information
  if (primaryInsurance && secondaryInsurance) {
    result.billingOrder = `${primaryInsurance} primary, then ${secondaryInsurance}`;
  } else if (primaryInsurance) {
    result.billingOrder = `${primaryInsurance} primary`;
  }
  
  // Check if primary was not billed
  const notBilledKeywords = ['never billed', 'not billed', 'never sent', 'not sent'];
  const primaryNotBilled = notBilledKeywords.some(keyword => lowerText.includes(keyword));
  
  // Build additional info
  let additionalInfo = '';
  if (primaryInsurance) {
    if (primaryNotBilled) {
      additionalInfo = `${primaryInsurance} not billed first`;
    } else {
      additionalInfo = `${primaryInsurance} should be primary`;
    }
  }
  
  result.primary = primaryInsurance;
  result.secondary = secondaryInsurance;
  result.additionalInfo = additionalInfo;
  
  return result;
}

// Helper function to parse timely filing information (CO-29)
function parseTimelyFilingInformation(originalText: string, lowerText: string): {
  additionalInfo?: string;
} {
  const result: any = {};
  
  // Extract timely filing limit (90 days, 180 days, etc.)
  const tflLimitPattern = /(\d+)\s*days?\s*tfl/i;
  const tflMatch = originalText.match(tflLimitPattern);
  const tflLimit = tflMatch ? `${tflMatch[1]}-day TFL` : 'TFL';
  
  // Extract DOS (Date of Service)
  const dosPattern = /dos\s*was\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const dosMatch = originalText.match(dosPattern);
  const dos = dosMatch ? ` for DOS ${dosMatch[1]}` : '';
  
  // Check for appeal information
  const canAppeal = /we\s*can\s*appeal/i.test(lowerText) || /can\s*appeal/i.test(lowerText);
  
  // Extract appeal deadline information
  const appealDeadlinePattern = /appeal\s*time\s*limit\s*is\s*(\d+)\s*days?\s*from\s*(?:date\s*of\s*)?denial\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const appealMatch = originalText.match(appealDeadlinePattern);
  
  let appealInfo = '';
  if (canAppeal) {
    if (appealMatch) {
      appealInfo = ` We can appeal; deadline is ${appealMatch[1]} days from denial ${appealMatch[2]}`;
    } else {
      appealInfo = ' We can appeal';
    }
  }
  
  result.additionalInfo = `${tflLimit}${dos}.${appealInfo}`;
  
  return result;
}

// Helper function to parse authorization information (CO-15)
function parseAuthorizationInformation(originalText: string, lowerText: string): {
  additionalInfo?: string;
} {
  const result: any = {};
  
  // Extract authorization number if present
  const authNumberPattern = /auth\s*#?\s*(\w+)/i;
  const authMatch = originalText.match(authNumberPattern);
  
  // Check for authorization status
  const authExpired = /auth\s*expired/i.test(lowerText);
  const authInvalid = /auth\s*invalid/i.test(lowerText);
  const authMissing = /auth\s*missing/i.test(lowerText) || /no\s*auth/i.test(lowerText);
  
  // Extract effective dates
  const effectiveDatePattern = /effective\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const effectiveMatch = originalText.match(effectiveDatePattern);
  
  let authInfo = '';
  if (authExpired) {
    authInfo = 'Authorization expired';
  } else if (authInvalid) {
    authInfo = 'Authorization invalid';
  } else if (authMissing) {
    authInfo = 'Authorization missing';
  } else if (authMatch) {
    authInfo = `Authorization ${authMatch[1]}`;
  }
  
  if (effectiveMatch) {
    authInfo += ` (effective ${effectiveMatch[1]})`;
  }
  
  // Check for required actions
  const needsNewAuth = /need\s*new\s*auth/i.test(lowerText) || /obtain\s*auth/i.test(lowerText);
  if (needsNewAuth) {
    authInfo += authInfo ? '. Need new authorization' : 'Need new authorization';
  }
  
  result.additionalInfo = authInfo;
  
  return result;
}

// Helper function to parse medical necessity information (CO-50)
function parseMedicalNecessityInformation(originalText: string, lowerText: string): {
  additionalInfo?: string;
} {
  const result: any = {};
  
  // Check for appeal options
  const canAppeal = /can\s*appeal/i.test(lowerText) || /appeal\s*available/i.test(lowerText);
  
  // Extract required documentation
  const docsRequired = /additional\s*(?:documentation|docs)\s*required/i.test(lowerText);
  const medicalRecords = /medical\s*records/i.test(lowerText);
  const clinicalNotes = /clinical\s*notes/i.test(lowerText);
  
  // Extract criteria information
  const criteriaPattern = /criteria\s*not\s*met/i;
  const criteriaMatch = originalText.match(criteriaPattern);
  
  let medNecInfo = '';
  if (criteriaMatch) {
    medNecInfo = 'Criteria not met';
  } else {
    medNecInfo = 'Medical necessity not established';
  }
  
  if (docsRequired || medicalRecords || clinicalNotes) {
    medNecInfo += '. Additional documentation required';
  }
  
  if (canAppeal) {
    medNecInfo += '. Can appeal with supporting documentation';
  }
  
  result.additionalInfo = medNecInfo;
  
  return result;
}

// Helper function to parse general information for other denial codes
function parseGeneralInformation(originalText: string, lowerText: string): {
  additionalInfo?: string;
} {
  const result: any = {};
  
  // Extract key phrases that provide useful context
  const keyPhrases = [];
  
  // Look for appeal information
  if (/can\s*appeal/i.test(lowerText)) {
    keyPhrases.push('can appeal');
  }
  
  // Look for deadline information
  const deadlinePattern = /deadline\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const deadlineMatch = originalText.match(deadlinePattern);
  if (deadlineMatch) {
    keyPhrases.push(`deadline ${deadlineMatch[1]}`);
  }
  
  // Look for resubmission information
  if (/resubmit/i.test(lowerText) || /re-submit/i.test(lowerText)) {
    keyPhrases.push('resubmit required');
  }
  
  // Look for correction information
  if (/correction\s*required/i.test(lowerText)) {
    keyPhrases.push('correction required');
  }
  
  // Look for patient responsibility
  if (/patient\s*(?:responsible|responsibility)/i.test(lowerText)) {
    keyPhrases.push('patient responsibility');
  }
  
  // Join key phrases
  if (keyPhrases.length > 0) {
    result.additionalInfo = keyPhrases.join('. ');
  }
  
  return result;
}

// Helper function to parse modifier information (CO-4)
function parseModifierInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract modifier codes
  const modifierPattern = /modifier\s*(\w+)/i;
  const modifierMatch = originalText.match(modifierPattern);
  
  // Check for missing/incorrect modifier
  const missingModifier = /missing\s*modifier/i.test(lowerText);
  const incorrectModifier = /incorrect\s*modifier/i.test(lowerText);
  const requiredModifier = /required\s*modifier/i.test(lowerText);
  
  let info = '';
  if (missingModifier) {
    info = 'Missing modifier';
  } else if (incorrectModifier) {
    info = 'Incorrect modifier';
  } else if (requiredModifier) {
    info = 'Required modifier';
  }
  
  if (modifierMatch) {
    info += info ? ` ${modifierMatch[1]}` : `Modifier ${modifierMatch[1]}`;
  }
  
  // Check for resubmission requirements
  if (/resubmit/i.test(lowerText)) {
    info += info ? '. Resubmit with correct modifier' : 'Resubmit with correct modifier';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse age restriction information (CO-6)
function parseAgeRestrictionInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract age information
  const agePattern = /age\s*(\d+)/i;
  const ageMatch = originalText.match(agePattern);
  
  // Extract procedure codes
  const procedurePattern = /(?:procedure|proc)\s*(?:code)?\s*(\w+)/i;
  const procedureMatch = originalText.match(procedurePattern);
  
  let info = '';
  if (ageMatch) {
    info = `Patient age ${ageMatch[1]}`;
  }
  
  if (procedureMatch) {
    info += info ? `. Procedure ${procedureMatch[1]} not age-appropriate` : `Procedure ${procedureMatch[1]} not age-appropriate`;
  } else if (/not\s*age\s*appropriate/i.test(lowerText)) {
    info += info ? '. Service not age-appropriate' : 'Service not age-appropriate';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse diagnosis/procedure mismatch information (CO-11)
function parseDiagnosisProcedureInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract diagnosis codes
  const diagnosisPattern = /(?:diagnosis|dx)\s*(?:code)?\s*([A-Z]\d+(?:\.\d+)?)/i;
  const diagnosisMatch = originalText.match(diagnosisPattern);
  
  // Extract procedure codes
  const procedurePattern = /(?:procedure|proc)\s*(?:code)?\s*(\w+)/i;
  const procedureMatch = originalText.match(procedurePattern);
  
  let info = '';
  if (diagnosisMatch && procedureMatch) {
    info = `Diagnosis ${diagnosisMatch[1]} doesn't support procedure ${procedureMatch[1]}`;
  } else if (diagnosisMatch) {
    info = `Diagnosis ${diagnosisMatch[1]} doesn't support procedure`;
  } else if (procedureMatch) {
    info = `Procedure ${procedureMatch[1]} not supported by diagnosis`;
  } else {
    info = 'Diagnosis/procedure mismatch';
  }
  
  // Check for documentation requirements
  if (/additional\s*documentation/i.test(lowerText)) {
    info += '. Additional documentation required';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse missing/incorrect information (CO-16)
function parseMissingInformationDetails(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract what's missing
  const missingItems = [];
  if (/missing\s*(?:member|patient)\s*id/i.test(lowerText)) missingItems.push('patient ID');
  if (/missing\s*(?:date|dos)/i.test(lowerText)) missingItems.push('DOS');
  if (/missing\s*(?:provider|npi)/i.test(lowerText)) missingItems.push('provider info');
  if (/missing\s*(?:diagnosis|dx)/i.test(lowerText)) missingItems.push('diagnosis');
  if (/missing\s*(?:procedure|proc)/i.test(lowerText)) missingItems.push('procedure');
  if (/missing\s*modifier/i.test(lowerText)) missingItems.push('modifier');
  
  let info = '';
  if (missingItems.length > 0) {
    info = `Missing: ${missingItems.join(', ')}`;
  } else if (/incorrect\s*information/i.test(lowerText)) {
    info = 'Incorrect information';
  } else {
    info = 'Missing/incorrect information';
  }
  
  // Check for resubmission requirements
  if (/resubmit/i.test(lowerText) || /corrected\s*claim/i.test(lowerText)) {
    info += '. Resubmit with corrections';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse prior payer adjudication information (CO-23)
function parsePriorPayerInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract primary payer information
  const primaryPayerPattern = /primary\s*(?:payer|insurance)?\s*paid\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const primaryMatch = originalText.match(primaryPayerPattern);
  
  // Extract allowable amount
  const allowablePattern = /allowable\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const allowableMatch = originalText.match(allowablePattern);
  
  let info = '';
  if (primaryMatch) {
    info = `Primary paid $${primaryMatch[1]}`;
  }
  
  if (allowableMatch) {
    info += info ? `. Allowable $${allowableMatch[1]}` : `Allowable $${allowableMatch[1]}`;
  }
  
  // Check for balance information
  if (/balance\s*due/i.test(lowerText)) {
    info += info ? '. Balance due secondary' : 'Balance due secondary';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse eligibility information (CO-27)
function parseEligibilityInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract termination date
  const terminationPattern = /terminated\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const terminationMatch = originalText.match(terminationPattern);
  
  // Extract DOS
  const dosPattern = /dos\s*(\d{1,2}\/\d{1,2}\/\d{2,4})/i;
  const dosMatch = originalText.match(dosPattern);
  
  let info = '';
  if (terminationMatch) {
    info = `Coverage terminated ${terminationMatch[1]}`;
  } else {
    info = 'Coverage terminated';
  }
  
  if (dosMatch) {
    info += `. DOS ${dosMatch[1]}`;
  }
  
  // Check for patient responsibility
  if (/patient\s*responsibility/i.test(lowerText)) {
    info += '. Patient responsibility';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse patient identification information (CO-31)
function parsePatientIdInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract what needs verification
  const verificationItems = [];
  if (/member\s*id/i.test(lowerText)) verificationItems.push('member ID');
  if (/date\s*of\s*birth|dob/i.test(lowerText)) verificationItems.push('DOB');
  if (/name/i.test(lowerText)) verificationItems.push('name');
  if (/ssn/i.test(lowerText)) verificationItems.push('SSN');
  
  let info = '';
  if (verificationItems.length > 0) {
    info = `Verify: ${verificationItems.join(', ')}`;
  } else {
    info = 'Patient demographics need verification';
  }
  
  // Check for corrected claim requirement
  if (/corrected\s*claim/i.test(lowerText)) {
    info += '. Submit corrected claim';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse fee schedule information (CO-45)
function parseFeeScheduleInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract amounts
  const billedPattern = /billed\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const billedMatch = originalText.match(billedPattern);
  
  const allowedPattern = /allowed\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const allowedMatch = originalText.match(allowedPattern);
  
  let info = '';
  if (billedMatch && allowedMatch) {
    info = `Billed $${billedMatch[1]}, allowed $${allowedMatch[1]}`;
  } else if (allowedMatch) {
    info = `Allowed amount $${allowedMatch[1]}`;
  } else {
    info = 'Exceeds fee schedule';
  }
  
  // Check for contracted rate
  if (/contracted\s*rate/i.test(lowerText)) {
    info += '. Payment at contracted rate';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse non-covered service information (CO-96)
function parseNonCoveredInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract exclusion reason
  let info = '';
  if (/plan\s*exclusion/i.test(lowerText)) {
    info = 'Plan exclusion';
  } else if (/not\s*covered/i.test(lowerText)) {
    info = 'Service not covered';
  } else {
    info = 'Non-covered service';
  }
  
  // Check for patient responsibility
  if (/patient\s*responsibility/i.test(lowerText)) {
    info += '. Patient responsibility';
  }
  
  // Check for alternatives
  if (/alternative\s*available/i.test(lowerText)) {
    info += '. Alternative available';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse bundled service information (CO-97)
function parseBundledInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract primary procedure
  const primaryProcPattern = /bundled\s*with\s*(\w+)/i;
  const primaryMatch = originalText.match(primaryProcPattern);
  
  let info = '';
  if (primaryMatch) {
    info = `Bundled with ${primaryMatch[1]}`;
  } else {
    info = 'Bundled with primary procedure';
  }
  
  // Check for payment status
  if (/primary\s*paid/i.test(lowerText)) {
    info += '. Primary procedure paid';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse wrong payer information (CO-109)
function parseWrongPayerInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract correct payer
  const correctPayerPattern = /send\s*to\s*(\w+(?:\s+\w+)*)/i;
  const correctMatch = originalText.match(correctPayerPattern);
  
  let info = '';
  if (correctMatch) {
    info = `Send to ${correctMatch[1]}`;
  } else {
    info = 'Wrong payer';
  }
  
  // Check for coverage change
  if (/coverage\s*changed/i.test(lowerText)) {
    info += '. Coverage changed';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse frequency limit information (CO-151)
function parseFrequencyInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract frequency limits
  const frequencyPattern = /(\d+)\s*(?:per|\/)\s*(\w+)/i;
  const frequencyMatch = originalText.match(frequencyPattern);
  
  let info = '';
  if (frequencyMatch) {
    info = `Limit: ${frequencyMatch[1]} per ${frequencyMatch[2]}`;
  } else {
    info = 'Frequency limit exceeded';
  }
  
  // Check for medical necessity
  if (/medical\s*necessity/i.test(lowerText)) {
    info += '. Medical necessity required for additional units';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse diagnosis not covered information (CO-167)
function parseDiagnosisNotCoveredInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract diagnosis codes
  const diagnosisPattern = /(?:diagnosis|dx)\s*(?:code)?\s*([A-Z]\d+(?:\.\d+)?)/i;
  const diagnosisMatch = originalText.match(diagnosisPattern);
  
  let info = '';
  if (diagnosisMatch) {
    info = `Diagnosis ${diagnosisMatch[1]} not covered`;
  } else {
    info = 'Diagnosis not covered';
  }
  
  // Check for covered alternatives
  if (/alternative\s*diagnosis/i.test(lowerText)) {
    info += '. Alternative diagnosis available';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse provider type restriction information (CO-170)
function parseProviderTypeInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract provider type
  const providerPattern = /provider\s*type\s*(\w+)/i;
  const providerMatch = originalText.match(providerPattern);
  
  let info = '';
  if (providerMatch) {
    info = `Provider type ${providerMatch[1]} not covered`;
  } else {
    info = 'Provider type restriction';
  }
  
  // Check for credentialing
  if (/credentialing/i.test(lowerText)) {
    info += '. Credentialing required';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse deductible information (PR-1)
function parseDeductibleInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract deductible amounts
  const deductiblePattern = /deductible\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const deductibleMatch = originalText.match(deductiblePattern);
  
  const metPattern = /met\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const metMatch = originalText.match(metPattern);
  
  let info = '';
  if (deductibleMatch) {
    info = `Deductible $${deductibleMatch[1]}`;
  }
  
  if (metMatch) {
    info += info ? `. Met $${metMatch[1]}` : `Met $${metMatch[1]}`;
  }
  
  // Check for patient responsibility
  if (/patient\s*responsibility/i.test(lowerText)) {
    info += info ? '. Patient responsibility' : 'Patient responsibility';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse coinsurance information (PR-2)
function parseCoinsuranceInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract coinsurance percentage
  const coinsurancePattern = /(\d+)%\s*coinsurance/i;
  const coinsuranceMatch = originalText.match(coinsurancePattern);
  
  // Extract amount
  const amountPattern = /\$?([\d,]+(?:\.\d{2})?)/;
  const amountMatch = originalText.match(amountPattern);
  
  let info = '';
  if (coinsuranceMatch) {
    info = `${coinsuranceMatch[1]}% coinsurance`;
  } else {
    info = 'Coinsurance responsibility';
  }
  
  if (amountMatch) {
    info += ` ($${amountMatch[1]})`;
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse copay information (PR-3)
function parseCopayInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract copay amount
  const copayPattern = /copay\s*\$?([\d,]+(?:\.\d{2})?)/i;
  const copayMatch = originalText.match(copayPattern);
  
  let info = '';
  if (copayMatch) {
    info = `Copay $${copayMatch[1]}`;
  } else {
    info = 'Copay responsibility';
  }
  
  // Check if collected
  if (/collected/i.test(lowerText)) {
    info += '. Collected at service';
  } else if (/not\s*collected/i.test(lowerText)) {
    info += '. Not collected';
  }
  
  result.additionalInfo = info;
  return result;
}

// Helper function to parse service not covered information (PR-204)
function parseServiceNotCoveredInformation(originalText: string, lowerText: string): { additionalInfo?: string } {
  const result: any = {};
  
  // Extract service information
  let info = 'Service not covered under plan';
  
  // Check for prior authorization
  if (/prior\s*authorization/i.test(lowerText)) {
    info += '. Prior authorization required';
  }
  
  // Check for plan exclusion
  if (/plan\s*exclusion/i.test(lowerText)) {
    info += '. Plan exclusion';
  }
  
  // Check for patient responsibility
  if (/patient\s*responsibility/i.test(lowerText)) {
    info += '. Patient responsibility';
  }
  
  result.additionalInfo = info;
  return result;
}

export function generateRCMComment(formData: any): string {
  const repName = formData.repName || "[Rep Name]";
  const insuranceName = getInsuranceLabel(formData.insuranceName) || "[Insurance]";
  const denialCode = formData.denialCode || "[Code]";
  const callReference = formData.callReference || "[Reference]";
  const notes = formData.additionalNotes || "";
  
  // Parse additional notes to extract key details
  const parsedDetails = parseIntelligentNotes(notes, formData.denialCode);
  
  let specificComment = "";
  
  switch (formData.denialCode) {
    case "CO-4":
      specificComment = `modifier issue`;
      break;
    case "CO-6":
      specificComment = `age restriction`;
      break;
    case "CO-11":
      specificComment = `diagnosis/procedure mismatch`;
      break;
    case "CO-15":
      specificComment = `missing authorization`;
      break;
    case "CO-16":
      specificComment = `missing/incorrect info`;
      break;
    case "CO-18":
      specificComment = `duplicate claim`;
      if (parsedDetails.originalClaim) {
        specificComment += `. Original claim #${parsedDetails.originalClaim}`;
      }
      if (parsedDetails.paidDate) {
        specificComment += ` paid ${parsedDetails.paidDate}`;
      }
      if (parsedDetails.needsVoid) {
        specificComment += `, so void required`;
      }
      break;
    case "CO-22":
      specificComment = `COB issue - other payer primary`;
      if (parsedDetails.primaryInsurance) {
        specificComment = `COB issue - ${parsedDetails.primaryInsurance} primary`;
      }
      break;
    case "CO-23":
      specificComment = `prior payer adjudication`;
      break;
    case "CO-27":
      specificComment = `eligibility terminated`;
      break;
    case "CO-29":
      specificComment = `timely filing exceeded`;
      break;
    case "CO-31":
      specificComment = `patient ID issue`;
      break;
    case "CO-45":
      specificComment = `exceeds fee schedule`;
      break;
    case "CO-50":
      specificComment = `medical necessity not met`;
      break;
    case "CO-96":
      specificComment = `non-covered service`;
      break;
    case "CO-97":
      specificComment = `bundled with primary procedure`;
      break;
    case "CO-109":
      specificComment = `wrong payer`;
      break;
    case "CO-151":
      specificComment = `frequency limit exceeded`;
      break;
    case "CO-167":
      specificComment = `diagnosis not covered`;
      break;
    case "CO-170":
      specificComment = `provider type restriction`;
      break;
    case "PR-1":
      specificComment = `deductible responsibility`;
      break;
    case "PR-2":
      specificComment = `coinsurance responsibility`;
      break;
    case "PR-3":
      specificComment = `copay responsibility`;
      break;
    case "PR-204":
      specificComment = `service not covered`;
      break;
    default:
      specificComment = `denial documented`;
  }
  
  // Build concise comment
  let comment = `Called ${insuranceName}, spoke with ${repName}. Claim denied for ${denialCode} (${specificComment}).`;
  
  // Add any additional parsed details
  if (parsedDetails.additionalInfo) {
    comment += ` ${parsedDetails.additionalInfo}.`;
  }
  
  return comment;
}

function getInsuranceLabel(value: string): string {
  const option = insuranceOptions.find(opt => opt.value === value);
  return option ? option.label : value;
}