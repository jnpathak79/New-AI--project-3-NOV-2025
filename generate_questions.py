#!/usr/bin/env python3
import json

# Additional Project Management Questions (IDs 61-150)
pm_questions = []
start_id = 61

pm_basic = [
    ("What is a project management information system (PMIS)?", "PMIS is a centralized system for collecting, storing, and distributing project information. It includes tools for scheduling, resource management, cost tracking, document management, and reporting. Examples: MS Project, Jira, Asana."),
    ("What is a requirement?", "A requirement is a condition or capability needed by a stakeholder to solve a problem or achieve an objective. Requirements can be functional (what system does) or non-functional (how system performs). They must be clear, testable, and traceable."),
    ("What is project closeout?", "Project closeout formally ends the project. Activities include: final deliverable acceptance, contract closure, resource release, documentation archival, lessons learned, celebration, financial closure, and transition to operations or maintenance."),
    ("What is a defect?", "A defect is a flaw or imperfection in a project deliverable that doesn\\'t meet requirements or quality standards. Defects are tracked, prioritized, and fixed. Root cause analysis helps prevent recurrence."),
    ("What is a project dashboard?", "A project dashboard is a visual display of key project metrics and status indicators. It provides at-a-glance view of health through charts, graphs, and KPIs. Enables quick decision-making and transparent communication."),
]

pm_intermediate = [
    ("What is Monte Carlo simulation in project management?", "Monte Carlo simulation uses probability distributions and random sampling to model project outcomes (cost, duration). It runs thousands of scenarios to show likelihood of meeting targets, helping quantify risks and set realistic expectations."),
    ("How do you manage project knowledge?", "Knowledge management: 1) Document processes and decisions, 2) Wiki or knowledge base, 3) Regular knowledge sharing sessions, 4) Mentoring and shadowing, 5) Post-project reviews, 6) Templates and checklists, 7) Community of practice, 8) Search and retrieval systems, 9) Culture of sharing."),
    ("What is agile estimation using story points?", "Story points estimate relative effort/complexity of user stories, not hours. Teams use planning poker or Fibonacci sequence. Velocity (points completed per sprint) enables forecasting. Benefits: faster estimation, team consensus, accounts for complexity and uncertainty."),
    ("Explain the difference between velocity and capacity.", "Velocity is the amount of work (story points) a team actually completes per sprint, measured historically. Capacity is the available time team members have for sprint work, considering vacations, meetings, other commitments. Capacity planning, velocity forecasting."),
    ("What is a spike in Agile?", "A spike is a time-boxed research or experimentation task to reduce uncertainty. Used when team needs to investigate technical approach, gather information, or prove feasibility before committing to implementation. Outcome is knowledge, not working software."),
]

pm_advanced = [
    ("How would you handle a project with multiple competing methodologies across teams?", "Hybrid approach: 1) Assess each team\\'s needs and context, 2) Define integration points and dependencies, 3) Common reporting structure, 4) Unified governance while allowing team autonomy, 5) Cross-team ceremonies for alignment, 6) Flexible approach based on work type, 7) Focus on outcomes not methodology purity, 8) Communication protocols, 9) Regular retrospectives to refine approach."),
    ("Describe your approach to organizational change management.", "OCM strategy: 1) Assess change impact and readiness, 2) Stakeholder analysis and engagement plan, 3) Compelling vision and case for change, 4) Leadership alignment and sponsorship, 5) Communication campaign, 6) Training and support, 7) Resistance management, 8) Quick wins and celebrations, 9) Feedback loops and adjustments, 10) Sustain through reinforcement, 11) Measure adoption and benefits."),
    ("How do you build and manage a project management office?", "PMO establishment: 1) Define PMO type (supportive, controlling, directive) and charter, 2) Assess organizational needs and maturity, 3) Develop standards, templates, methodologies, 4) Implement tools and systems, 5) Training and certification programs, 6) Project portfolio management, 7) Governance and oversight, 8) Metrics and reporting, 9) Continuous improvement, 10) Change management for PMO adoption, 11) Demonstrate value through improved outcomes."),
    ("Explain your approach to value stream mapping in projects.", "Value stream mapping: 1) Identify the value stream from customer request to delivery, 2) Map current state showing all steps, delays, waste, 3) Collect data (cycle time, wait time, defect rates), 4) Identify non-value-adding activities, 5) Design future state eliminating waste, 6) Create implementation roadmap, 7) Measure improvements, 8) Continuous optimization. Focus on flow and customer value."),
    ("How would you manage a project with regulatory compliance requirements?", "Compliance management: 1) Identify all applicable regulations early, 2) Compliance requirements in scope and design, 3) Subject matter expert involvement, 4) Documentation and traceability, 5) Compliance checkpoints and reviews, 6) Audit readiness, 7) Training on compliance requirements, 8) Risk assessment for non-compliance, 9) Regular updates on regulation changes, 10) Validation and testing for compliance, 11) Post-implementation compliance monitoring."),
]

# Generate all PM questions
for q, a in pm_basic:
    pm_questions.append({"id": start_id, "difficulty": "basic", "question": q, "answer": a})
    start_id += 1
for q, a in pm_intermediate:
    pm_questions.append({"id": start_id, "difficulty": "intermediate", "question": q, "answer": a})
    start_id += 1
for q, a in pm_advanced:
    pm_questions.append({"id": start_id, "difficulty": "advanced", "question": q, "answer": a})
    start_id += 1

# Additional Program Management Questions (IDs 91-150)
prog_questions = []
start_id = 91

# Similar structure for other domains...
print(f"Generated {len(pm_questions)} additional PM questions")
print(f"Sample: {pm_questions[0]}")
