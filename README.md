# AR Copilot: Healthcare Revenue Cycle Intelligence Platform

> A structured intelligence platform designed to assist healthcare revenue cycle professionals in managing multiple patient insurance claims during a single call, with context-aware guidance and intelligent documentation generation.

---

## Problem Statement

Healthcare organizations face significant operational challenges in revenue cycle management (RCM):

- **Cognitive Overload**: AR callers manage multiple patient accounts per call, each with distinct denial reasons requiring different questioning strategies
- **Inconsistent Documentation**: Insurance representative responses are captured as free-form text but must be converted into professional, standardized RCM comments
- **Decision Inefficiency**: Without structured guidance, callers may miss critical information or ask incomplete questions, requiring callbacks and extending resolution timelines
- **Compliance & Accuracy**: RCM documentation must follow industry standards and capture specific details based on denial code type

AR Copilot addresses these challenges by providing a structured, intelligent interface that guides users through the right questions, tracks multiple accounts simultaneously, and automatically transforms insurance representative responses into professional RCM documentation.

---

## Solution Overview

AR Copilot is a full-stack web application that combines:

1. **Multi-Account Tab Interface**: Manage 2–20+ patient accounts within a single call session
2. **Context-Aware Guidance System**: Denial code-based question prompts that guide users to collect necessary information
3. **Intelligent Documentation Engine**: Rule-based parsing of insurance representative responses that extracts key details and generates professional RCM comments
4. **Session Persistence**: Automatic data tracking across accounts and page refreshes

The platform is designed for use during active insurance calls, helping AR professionals ask the right questions at the right time and automatically document outcomes in industry-standard formats.

---

## How It Works

### 1. Multi-Account Session Management

- Each call session receives a unique identifier
- AR callers create one patient account per person discussed in the call
- Tab-based navigation allows switching between accounts without losing data
- Auto-copy feature streamlines data entry when multiple accounts share the same insurance representative

### 2. Denial Code-Driven Context Awareness

The system recognizes 23 standardized healthcare denial codes:

**CO Codes** (Claim Adjustment Reasons):
- CO-4, CO-6, CO-11, CO-15, CO-16, CO-18, CO-22, CO-23, CO-27, CO-29, CO-31, CO-45, CO-50, CO-96, CO-97, CO-109, CO-151, CO-167, CO-170

**PR Codes** (Patient Responsibility):
- PR-1, PR-2, PR-3, PR-204

When a user selects a denial code, the right panel automatically displays:
- **Targeted Questions**: 4–5 specific questions tailored to that denial reason (e.g., "What is the filing deadline for this payer?" for CO-29)
- **Required Fields**: Highlights which form fields must be filled for that denial type
- **Next Steps**: Recommended post-call actions

This context-aware approach reduces decision fatigue and ensures consistent information capture.

### 3. Intelligent Documentation Generation

#### Input Processing
Users capture insurance representative responses in the "Additional Notes" field as free-form text:
```
Example Input:
"90day tfl dos was 3/4/25 we can appeal appeal time limit is 45 days from date of denial 6/13/25"
```

#### Intelligent Parsing
The system applies denial code-specific parsing logic to extract structured information:
- **CO-29 Parser** recognizes: TFL limit (90 days), DOS (3/4/25), appeal window (45 days)
- **CO-18 Parser** identifies: claim numbers, payment dates, void requirements
- **CO-22 Parser** extracts: primary/secondary insurance information, billing sequence issues

#### Professional Comment Generation
Transforms parsed data into industry-standard RCM comments:
```
Generated Output:
"Called Amerigroup, spoke with Mike. Claim denied for CO-29 (timely filing exceeded). 
90-day TFL for DOS 3/4/25. We can appeal; deadline is 45 days from denial 6/13/25."
```

### 4. Data Persistence & Export

- **Session Storage**: All account data saved to browser session storage (survives page refresh)
- **Server Sync**: Real-time synchronization to database for persistent storage
- **CSV Export**: Download complete session including all accounts and generated comments

---

## AI Design & Intelligence Layer

### Architecture

The intelligence system operates as a **rule-based, deterministic processing pipeline**:

```
User Input (Additional Notes)
         ↓
Denial Code Selection
         ↓
Code-Specific Parser
(Pattern matching & extraction)
         ↓
Structured Data Extraction
(Claims, dates, amounts, names)
         ↓
Comment Template Generator
(Industry-standard formatting)
         ↓
Professional RCM Comment
```

### Why This Is "AI-Driven"

Rather than autonomous decision-making, the system reduces **cognitive load** through:

1. **Context Awareness**: The copilot "understands" which information is relevant by analyzing the selected denial code
2. **Intelligent Extraction**: Specialized parsing logic for each denial code recognizes domain-specific terms and values (e.g., "TFL", "DOS", "appeal deadline")
3. **Structured Guidance**: Questions, required fields, and next steps are dynamically determined based on denial type
4. **Deterministic Processing**: Comments are generated from parsed data using industry-standard templates, ensuring consistency and compliance

### Design Philosophy

The intelligence layer prioritizes:
- **Accuracy** over autonomy (human retains final review)
- **Determinism** (results are reproducible and auditable)
- **Domain Specificity** (logic is tailored to 23 distinct denial scenarios)
- **Operational Efficiency** (reduces decision time and information loss)

---

## Key Features

### Multi-Account Management
- Handle 2–20+ patient accounts in a single call session
- Tab-based navigation with automatic data persistence
- Add, update, or delete accounts mid-call without losing information
- Auto-copy representative name and call reference across accounts

### Intelligent Guidance Panel
- Dynamic question prompts tailored to each denial code
- Real-time highlighting of required form fields
- Recommended next steps for claim resolution
- Context updates as denial code changes

### Professional Documentation Generation
- One-click intelligent comment generation
- Denial code-specific parsing logic for 23 code types
- Industry-standard RCM comment formatting
- Supports detailed information extraction (claim numbers, dates, amounts, authorization details)

### Structured Data Capture
- Patient information (name, account number, DOB)
- Insurance details (carrier, representative, call reference)
- Denial information (code, description)
- Dates with validation (DOS, eligibility dates in MM/DD/YYYY format)
- Calendar pickers for date selection
- Free-form notes field for insurance representative responses

### Session & Data Management
- Automatic unique session ID per call
- Real-time browser session storage (survives page refresh)
- Server-side database persistence
- CSV export with complete session data and generated comments

### Searchable Insurance Directory
- 40+ major insurance carriers
- Alphabetically sorted
- Searchable/filterable dropdown

---

## Technical Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Form Management**: React Hook Form + Zod validation
- **State Management**: TanStack Query v5 (server state) + React hooks (UI state)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Utilities**: date-fns (date handling)

### Backend Stack
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Driver**: Neon Database (@neondatabase/serverless)
- **Schema Validation**: Zod
- **API Pattern**: RESTful endpoints for account CRUD operations

### Data Model

#### PatientAccount
```typescript
{
  id: number (auto-generated)
  patientName: string
  accountNumber: string
  insuranceName: string
  repName?: string
  callReference?: string
  denialCode?: string
  denialDescription?: string
  dateOfService?: string (MM/DD/YYYY)
  eligibilityFromDate?: string (MM/DD/YYYY)
  eligibilityStatus?: string
  additionalNotes?: string (insurance rep responses)
  sessionId: string (unique per call)
  createdAt: timestamp
  updatedAt: timestamp
}
```

### API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/accounts/:sessionId` | Retrieve all accounts for a session |
| POST | `/api/accounts` | Create new patient account |
| PATCH | `/api/accounts/:id` | Update patient account |
| DELETE | `/api/accounts/:id` | Delete patient account |

---

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (or Neon account for serverless)

### Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/CloudChuck/ar-copilot.git
   cd ar-copilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your DATABASE_URL
   ```

4. **Initialize database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   Application available at `http://localhost:5000`

### Build & Production

```bash
# Build frontend and backend
npm run build

# Start production server
npm start
```

### Available Scripts

```bash
npm run dev          # Development with hot reload
npm run build        # Production build
npm start            # Run production server
npm run db:push      # Apply database migrations
npm run check        # TypeScript type checking
```

---

## Usage Workflow

### Typical Call Session

1. **Session Starts**: New unique session ID created automatically
2. **Add Patient**: Click "+ Add Patient" for each account discussed
3. **Enter Demographics**: Name, account number, insurance carrier
4. **Select Denial Code**: Choose from 23 standardized denial codes
5. **Review Questions**: Read context-specific questions in right panel
6. **Conduct Call**: Ask questions to insurance representative
7. **Capture Responses**: Type representative's answers in "Additional Notes"
8. **Generate Comment**: Click "Generate Comment" for automatic RCM documentation
9. **Next Account**: Switch tabs or add additional patients
10. **Export Session**: Download CSV with complete call documentation

### Example Workflow

```
Patient: John Smith (ACC-001)
Insurance: Aetna
Rep: Sarah Johnson
Denial Code: CO-29 (Timely Filing Exceeded)

Right Panel Displays:
  Questions:
  • What is the timely filing limit for this payer?
  • What was the date of service?
  • What was the denial date?
  • Are there appeal options?

  Required Fields:
  • dateOfService
  • repName
  • additionalNotes

Call Conversation:
  Rep: "We have a 90-day timely filing limit. The DOS was 3/4/25, 
        and the claim was denied 6/13/25. You have 45 days to appeal."

User Enters in Additional Notes:
  "90day tfl dos was 3/4/25 denied 6/13/25 45 day appeal window"

Click "Generate Comment":
  "Called Aetna, spoke with Sarah Johnson. Claim denied for CO-29 
   (timely filing exceeded). 90-day TFL for DOS 3/4/25. We can 
   appeal; deadline is 45 days from denial 6/13/25."
```

---

## Denial Code Coverage

The system includes specialized parsing and guidance for 23 standardized healthcare denial codes, organized by category:

### Claim Adjustment Codes (CO)
- **CO-4**: Modifier inconsistency or missing modifier
- **CO-6**: Procedure code age-inappropriate
- **CO-11**: Diagnosis code inconsistent with procedure
- **CO-15**: Missing, invalid, or misapplied authorization
- **CO-16**: Claim missing information or billing error
- **CO-18**: Duplicate claim submission
- **CO-22**: Coordination of Benefits (COB) issue
- **CO-23**: Prior payer adjudication impact
- **CO-27**: Patient plan eligibility terminated
- **CO-29**: Timely filing deadline exceeded
- **CO-31**: Patient member ID verification failure
- **CO-45**: Billed amount exceeds fee schedule
- **CO-50**: Medical necessity not established
- **CO-96**: Non-covered service
- **CO-97**: Service bundled with primary procedure
- **CO-109**: Claim submitted to wrong payer
- **CO-151**: Service frequency limit exceeded
- **CO-167**: Diagnosis code not covered
- **CO-170**: Provider type restriction

### Patient Responsibility Codes (PR)
- **PR-1**: Patient deductible responsibility
- **PR-2**: Patient coinsurance responsibility
- **PR-3**: Patient copay responsibility
- **PR-204**: Service not covered by plan

---

## Performance & Design Considerations

### Session Management
- Unique session ID per call enables tracking of related accounts
- Session storage provides immediate persistence (survives refresh)
- Server database synchronization ensures durability

### User Experience
- Optimistic UI updates for form changes
- Real-time field validation (date format)
- Calendar pickers reduce manual entry errors
- Auto-copy functionality streamlines multi-account workflows

### Data Integrity
- Zod schema validation on client and server
- TypeScript enforces type safety across frontend and backend
- Account data isolated by session ID

---

## Project Structure

```
ar-copilot/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ar-copilot.tsx      # Main application component
│   │   ├── lib/
│   │   │   ├── denial-codes.ts     # Denial code mappings & parsing logic
│   │   │   └── queryClient.ts      # TanStack Query setup
│   │   ├── hooks/
│   │   ├── App.tsx                 # Router configuration
│   │   └── main.tsx                # Entry point
│   └── index.css                   # Global styles
├── server/                          # Express backend
│   ├── index.ts                    # Server entry point
│   ├── routes.ts                   # API route handlers
│   ├── storage.ts                  # Data storage interface
│   └── vite.ts                     # Vite integration
├── shared/                          # Shared code
│   └── schema.ts                   # Database schema & types
├── package.json
├── tsconfig.json
├── vite.config.ts
├── drizzle.config.ts
├── tailwind.config.ts
├── README.md
├── LICENSE
└── .env.example
```

---

## Environment Configuration

```env
# Database connection string (Neon or local PostgreSQL)
DATABASE_URL=postgresql://user:password@host:port/database

# Application environment
NODE_ENV=development  # or production
```

---

## Design Decisions & Rationale

### Why Rule-Based Intelligence?
Rule-based parsing ensures **auditable, reproducible results** suitable for healthcare compliance. Each denial code has deterministic extraction logic, making the system predictable and trustworthy for clinical and financial documentation.

### Why Session-Based Architecture?
Healthcare calls typically involve 2–10 patient accounts. Session-based grouping allows users to manage related accounts as a logical unit, simplifying data organization and export.

### Why Dual Storage (Session + Server)?
- **Session Storage**: Provides immediate responsiveness and offline tolerance
- **Server Database**: Ensures persistent audit trail and enables multi-user scenarios

### Why Structured Comments?
Free-form documentation is error-prone and difficult to audit. Structured RCM comments generated from validated parsed data improve compliance, reduce transcription errors, and enable downstream automation.

---

## Target Users

- Healthcare revenue cycle professionals (AR/RCM callers)
- Insurance verification specialists
- Denial management teams
- Healthcare billing departments

**Key User Attributes:**
- Handle 5–50 calls per day
- Manage 2–20+ accounts per call
- Require documented evidence for compliance
- Need rapid turnaround on claim resolution

---

## Future Enhancements

Potential areas for expansion (not yet implemented):

- Historical call analytics and trending
- Custom denial code templates
- Team collaboration and supervisor review workflows
- Multi-language support
- Integration with EHR/RCM systems
- Advanced reporting and denial root cause analysis

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Follow existing code conventions and patterns
4. Test changes with multiple denial codes
5. Commit and push (`git push origin feature/enhancement`)
6. Open a pull request with clear description

---

## License

MIT License — See LICENSE file for details

---

## Support & Documentation

- **Issues & Questions**: [GitHub Issues](https://github.com/CloudChuck/ar-copilot/issues)
- **Documentation**: README.md and code comments
- **Local Development**: Follow installation steps above

---

## Acknowledgments

Built with production-grade tooling and healthcare-specific domain expertise:

- **React** & **TypeScript** for type-safe UI development
- **Shadcn/ui** & **Radix UI** for accessible components
- **Drizzle ORM** for type-safe database operations
- **TanStack Query** for efficient server state management
- **Tailwind CSS** for responsive design

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Maintainer**: CloudChuck

---

*AR Copilot is designed to assist healthcare revenue cycle professionals in managing insurance calls efficiently while maintaining compliance and documentation standards.*