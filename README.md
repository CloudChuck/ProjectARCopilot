# AR Copilot - Healthcare Revenue Cycle Management (RCM) Assistant

> An intelligent AI-powered assistant for healthcare Accounts Receivable (AR) professionals to efficiently manage multiple patient insurance claims in a single call with AI-driven suggestions and automatic professional comment generation.

## Overview

**AR Copilot** is a specialized healthcare application designed to assist AR callers when speaking with insurance representatives about multiple patient accounts in a single call. The application streamlines the workflow by providing intelligent suggestions, context-aware questions, and automatically generating professional RCM documentation comments from insurance representative responses.

## Key Features

### 🎯 Multi-Account Management
- **Tab-Based Interface**: Handle multiple patient accounts in one call session
- **Quick Navigation**: Switch between accounts with a single click
- **Add/Delete Accounts**: Easily manage multiple patients per call
- **Auto-Copy**: Representative name and call reference auto-populate when adding new accounts
- **Session Management**: Automatic unique session ID for tracking calls

### 💡 Intelligent AI Copilot (Right Panel)
- **Context-Aware Questions**: Dynamic questions tailored to each denial code
- **Required Fields Highlighting**: Shows which form fields are critical
- **Smart Next Steps**: Recommended actions for claim resolution
- **Optimized Workflow**: Questions updated in real-time as you select denial codes

### 📝 Intelligent Comment Generation
The system intelligently parses insurance representative responses from the "Additional Notes" field and generates professional RCM-format comments:

**Example:**
```
Additional Notes: "90days tfl dos was 3/4/25 we can appeal appeal time limit 
is 45 days from date of denial 6/13/25"

Generated Comment: "Called Amerigroup, spoke with Mike. Claim denied for CO-29 
(timely filing exceeded). 90-day TFL for DOS 3/4/25. We can appeal; deadline is 
45 days from denial 6/13/25."
```

**Smart Parsing for All 23 Denial Codes:**
- Extracts claim numbers, payment dates, authorization numbers
- Identifies TFL limits, DOS dates, appeal deadlines
- Recognizes primary/secondary insurance information
- Captures amounts, modifiers, diagnosis codes
- Understands medical necessity and documentation requirements

### 📊 Comprehensive Denial Code Coverage (23 Codes)

**CO Codes (Claim Adjustment Reason Codes):**
- CO-4: Modifier inconsistency or missing
- CO-6: Procedure code age-inappropriate
- CO-11: Diagnosis-procedure mismatch
- CO-15: Missing/invalid authorization
- CO-16: Missing information or billing error
- CO-18: Duplicate claim
- CO-22: Coordination of Benefits (COB) issue
- CO-23: Prior payer impact
- CO-27: Patient plan termination
- CO-29: Timely filing exceeded
- CO-31: Verification required
- CO-45: Billed vs allowed amount
- CO-50: Medical necessity denied
- CO-96: Plan exclusion
- CO-97: Bundled procedure
- CO-109: Incorrect payer information
- CO-151: Frequency limit exceeded
- CO-167: Diagnosis code issue
- CO-170: Provider type/credentialing issue

**PR Codes (Patient Responsibility):**
- PR-1: Deductible
- PR-2: Coinsurance
- PR-3: Copay
- PR-204: Plan coverage/prior authorization

### 📋 Patient Account Form
Capture all essential information:
- Patient name & account number
- Insurance carrier (40+ options, searchable)
- Representative name & call reference
- Date of Service (MM/DD/YYYY with calendar picker)
- Eligibility dates
- Eligibility status
- Denial code & description
- Additional notes (answers to AI-generated questions)

### 📥 CSV Export
- Export complete session data
- Includes all patient accounts from the call
- Contains generated professional comments
- Ready for RCM system documentation

### 📱 Responsive Design
- Modern three-panel layout
- Works on desktop and tablet devices
- Real-time data synchronization
- Session persistence across refreshes

## Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Wouter** - Lightweight routing
- **Shadcn/ui** - Component library (Radix UI primitives)
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query v5** - Server state management
- **Lucide React** - Icons
- **date-fns** - Date utilities
- **Vite** - Build tool

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Neon Database** - PostgreSQL serverless driver
- **Zod** - Schema validation

### Development
- **tsx** - TypeScript execution
- **Drizzle Kit** - Database migrations
- **Vite** - Development server

## Installation

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (or Neon account for serverless)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CloudChuck/ar-copilot.git
   cd ar-copilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Add your database connection string
   DATABASE_URL=postgresql://user:password@localhost:5432/ar_copilot
   ```

4. **Push database schema**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## Usage

### Starting a Call Session

1. **New Call**: The app automatically creates a session ID
2. **Add Patients**: Click "+ Add Patient" for each account in the call
3. **Fill Patient Details**: Enter name, account number, and insurance info
4. **Select Denial Code**: Choose the appropriate denial code
5. **Review Questions**: Read suggested questions in the right panel
6. **Call Insurance Rep**: Ask the suggested questions
7. **Capture Answers**: Type the rep's responses in "Additional Notes"
8. **Generate Comment**: Click "Generate Comment" for professional documentation
9. **Export Data**: Click "Export CSV" to save the session

### Workflow Example

```
Patient: John Smith (Account: ACC-001)
Insurance: Aetna
Rep Name: Sarah Johnson
Denial Code: CO-29 (Timely Filing Exceeded)

Right Panel Shows:
Questions:
✓ What is the timely filing limit for this payer?
✓ What was the date of service?
✓ What was the denial date?
✓ Are there appeal options?

Required Fields:
✓ dateOfService
✓ repName
✓ additionalNotes

Call Rep → Type Response:
"90day tfl, dos 3/4/25, denied 6/13/25, appeal window is 45 days"

Click "Generate Comment" → 
"Called Aetna, spoke with Sarah Johnson. Claim denied for CO-29 (timely 
filing exceeded). 90-day TFL for DOS 3/4/25. Deadline for appeal: 45 days 
from denial date 6/13/25."
```

## Project Structure

```
ar-copilot/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   └── ar-copilot.tsx      # Main application component
│   │   ├── pages/                  # Page components
│   │   ├── lib/
│   │   │   ├── denial-codes.ts     # Denial code mappings & AI logic
│   │   │   └── queryClient.ts      # TanStack Query setup
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── App.tsx                 # App router setup
│   │   └── main.tsx                # Entry point
│   └── index.css                   # Global styles
├── server/                          # Backend Express application
│   ├── index.ts                    # Server entry point
│   ├── routes.ts                   # API routes
│   ├── storage.ts                  # Data storage interface
│   └── vite.ts                     # Vite integration
├── shared/                          # Shared code
│   └── schema.ts                   # Database schema & validation
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                  # Vite config
├── drizzle.config.ts               # Drizzle config
├── tailwind.config.ts              # Tailwind config
└── README.md                        # This file
```

## Environment Variables

### Development
```env
DATABASE_URL=postgresql://user:password@localhost:5432/ar_copilot
NODE_ENV=development
```

### Production
```env
DATABASE_URL=postgresql://user:password@host:port/db_name
NODE_ENV=production
```

## Scripts

```bash
# Development
npm run dev              # Start development server with hot reload

# Build & Production
npm run build           # Build frontend and backend
npm start               # Start production server

# Database
npm run db:push         # Apply database migrations

# Validation
npm run check           # TypeScript type checking
```

## API Endpoints

### Accounts
- `GET /api/accounts/:sessionId` - Get all accounts for a session
- `POST /api/accounts` - Create new patient account
- `PATCH /api/accounts/:id` - Update patient account
- `DELETE /api/accounts/:id` - Delete patient account

## Denial Code Intelligence

The system uses specialized parsing logic for each denial code to extract relevant information from insurance representative responses:

### CO-29 (Timely Filing) Example Parsing
```javascript
Input Notes: "90days tfl dos was 3/4/25 we can appeal appeal time limit is 45 days"
Extracted:
- tflLimit: "90-day"
- dos: "3/4/25"
- appealDeadline: "45 days"

Output Comment: "Called [Insurance], spoke with [Rep]. Claim denied for CO-29 
(timely filing exceeded). 90-day TFL for DOS 3/4/25. We can appeal; deadline 
is 45 days from denial."
```

### CO-22 (COB) Example Parsing
```javascript
Input Notes: "pt has aetna too, which is primary. it was never billed to aetna"
Extracted:
- primaryInsurance: "Aetna"
- secondaryInsurance: "HealthNet"
- billingIssue: "never billed to primary"

Output Comment: "Called HealthNet, spoke with [Rep]. Claim denied for CO-22 
(COB issue). Aetna is primary insurance - claim never billed to Aetna first."
```

## Data Persistence

- **Session Storage**: Data saved to browser session storage (survives page refresh)
- **Server Sync**: All data automatically synced to database
- **Unique Session IDs**: Each call tracked with automatic session identifier
- **Cross-Tab Stability**: Data persists when switching between patient tabs

## Performance Optimizations

- **Optimistic UI Updates**: Changes reflected immediately without waiting for server
- **Real-time Parsing**: Comments generated instantly as you type
- **Efficient Queries**: TanStack Query caching prevents redundant requests
- **Lazy Loading**: Components load on demand

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive design)

## Deployment

### Replit
The application is configured to run on Replit with:
- Hot reload development environment
- Automatic database connection
- Built-in environment variable management

### Docker
```bash
docker build -t ar-copilot .
docker run -p 5000:5000 -e DATABASE_URL=your_db_url ar-copilot
```

### Traditional Server
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use existing Shadcn/ui components
- Validate forms with Zod schemas
- Keep components focused and reusable
- Test changes with multiple denial codes

## Roadmap

- [ ] Multi-language support
- [ ] Historical call analytics
- [ ] Custom denial code templates
- [ ] Team collaboration features
- [ ] Mobile native app
- [ ] Voice integration with insurance calls
- [ ] Machine learning comment refinement

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions:
- GitHub Issues: [Create an issue](https://github.com/CloudChuck/ar-copilot/issues)
- Documentation: Check the [wiki](https://github.com/CloudChuck/ar-copilot/wiki)

## Acknowledgments

- Built with [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org)
- UI components from [Shadcn/ui](https://ui.shadcn.com)
- Database powered by [Drizzle ORM](https://orm.drizzle.team)
- Inspired by healthcare RCM industry best practices

---

**Made by Ashvani with ❤️ for healthcare revenue cycle professionals**

**Last Updated**: December 2025  
**Current Version**: 1.0.0
