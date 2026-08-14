# VSTMBT_Project

This repository contains the complete project archive and collected trial datasets for the Visual Short-Term Memory Binding Task. 

This is a personal project built using the PsychoPy framework. All core application files, experimental setup conditions, asset models, and empirical trial datasets have been archived here for project evaluation.

---

## 📁 Repository Structure & Artifacts

All relevant files from the project workspace are categorized as follows on the root level:

### 1. Core Experiment & Source Code
* **`vst_task_final.psyexp`** - The primary PsychoPy Builder file detailing the routine architecture, flow loops, and experiment configurations.
* **`vst_task_final_lastrun.py`** - The fully compiled Python execution script generated natively from the local builder interface.
* **`vst_task_final.js`** - The target JavaScript translation script intended for the online browser environment.
* **`index.html`** - The template landing interface designed to initialize the experimental window.

### 2. Experiment Setup & Visual Stimuli
* **`trials.xlsx`** - The core conditions design spreadsheet controlling the randomized parameters, target variables, and dynamic trial blocks.
* **`cross.png`**, **`star.png`**, **`wave.png`** - The static graphical source assets used as primary targets and distractors across the experimental routines.

### 3. Empirical Trial Outputs (Collected Data)
* **PilotRM Run (August 1, 2026)** - Data files logging experimental variables, trial text logs, and internal binary database outputs (`.csv`, `.txt`, `.psydat`) for the target participant ID "PilotRM".
* **test2 Run (July 20, 2026)** - Baseline trial output runs verifying structural layout metrics, system timing registers, and task loop properties (`.csv`, `.txt`, `.psydat`) labeled under "test2".
