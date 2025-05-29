# Auga Backend

This is the FastAPI backend for the Auga platform.

## Getting Started

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn
   ```
3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

---

This backend will connect to Supabase and serve the frontend at `/frontend`.
