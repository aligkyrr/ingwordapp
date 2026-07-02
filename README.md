# 📘 State Feedback System Simulator

⚠️ This is a **system design / control simulation project**, not a frontend application.

A state-driven embedded system simulation model inspired by **Electrical & Electronics Engineering (EE)** and **control systems engineering**, implemented in JavaScript.

The browser is used only as a **runtime simulation layer**, not the system itself.

---

# 🧠 SYSTEM OVERVIEW

This project simulates a lightweight embedded cognitive controller using:

- Finite State Machine (FSM)
- Closed-loop feedback control system
- Modular firmware-style architecture
- Event-driven system behavior
- Deterministic state transitions

---

# ⚙️ SYSTEM ARCHITECTURE

The system follows classic embedded/control engineering principles:

- Input → Process → Output pipeline
- State-based decision engine
- Memory-driven execution model
- Feedback reinforcement loop

---

# 🔁 CONTROL LOOP BEHAVIOR

1. User input (stimulus)
2. State evaluation (system memory)
3. Processing logic (control unit)
4. Output rendering (UI layer)
5. Feedback injection (learning loop)

This behavior mimics a **discrete-time adaptive control system**.

---

# 🧠 ENGINEERING CONCEPTS

- State Machine Design
- Feedback Control Systems
- Deterministic System Behavior
- Modular System Decomposition
- Event-driven Architecture
- Memory-State Coupling

---

# 🚀 CAPABILITIES

- Deterministic state progression engine
- Error-driven reinforcement loop
- Persistent memory layer (localStorage)
- External REST API integration
- Modular system architecture
- Dynamic state transitions

---

# 🧰 TECH STACK

- JavaScript (ES Modules)
- REST API (data abstraction layer)
- Browser runtime (simulation environment only)

---

# 📁 MODULE STRUCTURE

- `state.js` → System memory (RAM simulation)
- `actions.js` → Control unit (decision engine)
- `ui.js` → Output interface (HMI layer)
- `api.js` → External communication bus
- `storage.js` → Persistent memory layer
- `main.js` → Boot sequence (system initialization)
- `quiz.js` → Algorithmic processing unit
- `config.js` → System configuration registers

---

# 🧠 ENGINEERING VALUE

This project demonstrates:

- Embedded system architecture thinking
- Control system logic implementation
- State-driven computation model
- Modular firmware-style design
- Feedback-based adaptive system behavior

---

# 🔐 CONFIGURATION LAYER

```js
export const SUPABASE_KEY = "PUBLIC_INTERFACE_KEY";
export const SUPABASE_URL = "DATA_LAYER_ENDPOINT";
```

---

# ⚠️ DESIGN PRINCIPLE

This system is intentionally designed as a **minimal embedded systems simulation model**, not a UI-centric application.

The browser is only a **runtime execution environment**.

---

# 🧾 SYSTEM SUMMARY

A state-driven embedded system simulation implementing finite state machines and feedback control loops within a virtual execution environment.