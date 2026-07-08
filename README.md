# SafeTest-secure-proctoring-exam
Project Description 

What We Did
We built an intelligent web-based exam portal that acts as an automated digital supervisor. It monitors student behavior in real-time to prevent cheating during online tests without needing a human watcher.

Technologies & Coding Languages Used:

     Frontend: React.js, JavaScript, HTML5, CSS3

AI Engine: 

    TensorFlow.js and the BlazeFace model (for facial tracking inside the browser)

Backend & Storage: 

    Node.js, Express, Axios (running on Port 3307), and browser localStorage for fallback data saving.

Core Features:

AI Face Monitoring: Detects if the student moves away from the screen, covers the camera, or if multiple people enter the room.

Browser Lockdown: Enforces automatic full-screen mode and blocks tab switching, window minimizing, and copy-paste shortcuts.

Integrity Score & Automated Submissions: Students start with a 100% score. Every violation deducts points and captures a photo snapshot. Reaching 3 violations triggers an immediate automatic submission.

Live Instructor Dashboard: A PIN-protected screen where teachers can view live exam logs, scores, and photographic proof of violations.


How It Works (Step-by-Step):

Identity Verification: The student enters their name and ID. The camera turns on, checks for a clear environment, and a voice reads out the exam rules.

Lockdown Activation: The exam launches into full-screen mode, and security event listeners activate to track mouse and keyboard inputs.

Real-Time Scanning: Every 1.5 seconds, the AI checks the webcam video to verify the student's presence, while the system checks if the user is still focused on the test.

Automatic Enforcement: If a violation occurs, the system docks points, logs the event, and snaps a photo. If 3 strikes are hit, the test locks out and auto-submits.

Teacher Review: All grades, answers, and violation snapshots are instantly synced to the database for the teacher to audit.
