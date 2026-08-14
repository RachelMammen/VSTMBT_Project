/*********************** 
 * Vst_Task_Final *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vst_task_final';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(SummaryRoutineBegin());
flowScheduler.add(SummaryRoutineEachFrame());
flowScheduler.add(SummaryRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trials.xlsx', 'path': 'trials.xlsx'},
    {'name': 'cross.png', 'path': 'cross.png'},
    {'name': 'star.png', 'path': 'star.png'},
    {'name': 'wave.png', 'path': 'wave.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var inst_text;
var inst_key;
var SampleClock;
var fixation;
var shape_L;
var shape_C;
var shape_R;
var TestClock;
var test_shape_L;
var test_shape_C;
var test_shape_R;
var key_resp;
var SummaryClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text',
    text: 'Visual Short-Term Memory Binding Task (VSTMBT)\n\nIn this task, you will see a fixation cross in the center of the screen to start. \nPlease focus your eyes on the cross.\n\nNext, three shapes will appear simultaneously.\nEach shape will be filled with a unique color. \nYou have 2 seconds to memorize these shape-and-color combinations.\n\nAfter a brief 1-second blank delay, three shapes will reappear on the screen. \n\nYour goal is to determine if the shape-and-color combinations are identical to the ones you just memorized:\n\n- Press S if the combinations are exactly the SAME.\n\n- Press D if the combinations are DIFFERENT (meaning two colors have swapped shapes).\n\nPlease respond as quickly and accurately as possible.\n\n\nPress the SPACEBAR to begin the task.\n\n(This test run was designed by Rachel Mammen)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  inst_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Sample"
  SampleClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  shape_L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'shape_L', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  shape_C = new visual.ImageStim({
    win : psychoJS.window,
    name : 'shape_C', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  shape_R = new visual.ImageStim({
    win : psychoJS.window,
    name : 'shape_R', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Test"
  TestClock = new util.Clock();
  test_shape_L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_shape_L', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test_shape_C = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_shape_C', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test_shape_R = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_shape_R', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Summary"
  SummaryClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var _inst_key_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    inst_key.keys = undefined;
    inst_key.rt = undefined;
    _inst_key_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(inst_text);
    InstructionsComponents.push(inst_key);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_text* updates
    if (t >= 0.0 && inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text.tStart = t;  // (not accounting for frame time here)
      inst_text.frameNStart = frameN;  // exact frame index
      
      inst_text.setAutoDraw(true);
    }
    
    
    // if inst_text is active this frame...
    if (inst_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *inst_key* updates
    if (t >= 0.0 && inst_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_key.tStart = t;  // (not accounting for frame time here)
      inst_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst_key.clearEvents(); });
    }
    
    // if inst_key is active this frame...
    if (inst_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _inst_key_allKeys = _inst_key_allKeys.concat(theseKeys);
      if (_inst_key_allKeys.length > 0) {
        inst_key.keys = _inst_key_allKeys[_inst_key_allKeys.length - 1].name;  // just the last key pressed
        inst_key.rt = _inst_key_allKeys[_inst_key_allKeys.length - 1].rt;
        inst_key.duration = _inst_key_allKeys[_inst_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(inst_key.corr, level);
    }
    psychoJS.experiment.addData('inst_key.keys', inst_key.keys);
    if (typeof inst_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst_key.rt', inst_key.rt);
        psychoJS.experiment.addData('inst_key.duration', inst_key.duration);
        routineTimer.reset();
        }
    
    inst_key.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(SampleRoutineBegin(snapshot));
      trialsLoopScheduler.add(SampleRoutineEachFrame());
      trialsLoopScheduler.add(SampleRoutineEnd(snapshot));
      trialsLoopScheduler.add(TestRoutineBegin(snapshot));
      trialsLoopScheduler.add(TestRoutineEachFrame());
      trialsLoopScheduler.add(TestRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SampleMaxDurationReached;
var SampleMaxDuration;
var SampleComponents;
function SampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Sample' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SampleClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    SampleMaxDurationReached = false;
    // update component parameters for each repeat
    shape_L.setColor(new util.Color(color1));
    shape_L.setImage(shape1);
    shape_C.setColor(new util.Color(color2));
    shape_C.setImage(shape2);
    shape_R.setColor(new util.Color(color3));
    shape_R.setImage(shape3);
    psychoJS.experiment.addData('Sample.started', globalClock.getTime());
    SampleMaxDuration = null
    // keep track of which components have finished
    SampleComponents = [];
    SampleComponents.push(fixation);
    SampleComponents.push(shape_L);
    SampleComponents.push(shape_C);
    SampleComponents.push(shape_R);
    
    for (const thisComponent of SampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Sample' ---
    // get current time
    t = SampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    
    // *shape_L* updates
    if (t >= 0.5 && shape_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shape_L.tStart = t;  // (not accounting for frame time here)
      shape_L.frameNStart = frameN;  // exact frame index
      
      shape_L.setAutoDraw(true);
    }
    
    
    // if shape_L is active this frame...
    if (shape_L.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (shape_L.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      shape_L.tStop = t;  // not accounting for scr refresh
      shape_L.frameNStop = frameN;  // exact frame index
      // update status
      shape_L.status = PsychoJS.Status.FINISHED;
      shape_L.setAutoDraw(false);
    }
    
    
    // *shape_C* updates
    if (t >= 0.5 && shape_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shape_C.tStart = t;  // (not accounting for frame time here)
      shape_C.frameNStart = frameN;  // exact frame index
      
      shape_C.setAutoDraw(true);
    }
    
    
    // if shape_C is active this frame...
    if (shape_C.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (shape_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      shape_C.tStop = t;  // not accounting for scr refresh
      shape_C.frameNStop = frameN;  // exact frame index
      // update status
      shape_C.status = PsychoJS.Status.FINISHED;
      shape_C.setAutoDraw(false);
    }
    
    
    // *shape_R* updates
    if (t >= 0.5 && shape_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shape_R.tStart = t;  // (not accounting for frame time here)
      shape_R.frameNStart = frameN;  // exact frame index
      
      shape_R.setAutoDraw(true);
    }
    
    
    // if shape_R is active this frame...
    if (shape_R.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (shape_R.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      shape_R.tStop = t;  // not accounting for scr refresh
      shape_R.frameNStop = frameN;  // exact frame index
      // update status
      shape_R.status = PsychoJS.Status.FINISHED;
      shape_R.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Sample' ---
    for (const thisComponent of SampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Sample.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (SampleMaxDurationReached) {
        SampleClock.add(SampleMaxDuration);
    } else {
        SampleClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TestMaxDurationReached;
var test_color_L;
var test_color_C;
var _key_resp_allKeys;
var TestMaxDuration;
var TestComponents;
function TestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    TestClock.reset();
    routineTimer.reset();
    TestMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if ((condition === "different")) {
        test_color_L = color2;
        test_color_C = color1;
    } else {
        test_color_L = color1;
        test_color_C = color2;
    }
    
    test_shape_L.setColor(new util.Color(test_color_L));
    test_shape_L.setImage(shape1);
    test_shape_C.setColor(new util.Color(test_color_C));
    test_shape_C.setImage(shape2);
    test_shape_R.setColor(new util.Color(color3));
    test_shape_R.setImage(shape3);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Test.started', globalClock.getTime());
    TestMaxDuration = null
    // keep track of which components have finished
    TestComponents = [];
    TestComponents.push(test_shape_L);
    TestComponents.push(test_shape_C);
    TestComponents.push(test_shape_R);
    TestComponents.push(key_resp);
    
    for (const thisComponent of TestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Test' ---
    // get current time
    t = TestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_shape_L* updates
    if (t >= 1.0 && test_shape_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_shape_L.tStart = t;  // (not accounting for frame time here)
      test_shape_L.frameNStart = frameN;  // exact frame index
      
      test_shape_L.setAutoDraw(true);
    }
    
    
    // if test_shape_L is active this frame...
    if (test_shape_L.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *test_shape_C* updates
    if (t >= 1.0 && test_shape_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_shape_C.tStart = t;  // (not accounting for frame time here)
      test_shape_C.frameNStart = frameN;  // exact frame index
      
      test_shape_C.setAutoDraw(true);
    }
    
    
    // if test_shape_C is active this frame...
    if (test_shape_C.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *test_shape_R* updates
    if (t >= 1.0 && test_shape_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_shape_R.tStart = t;  // (not accounting for frame time here)
      test_shape_R.frameNStart = frameN;  // exact frame index
      
      test_shape_R.setAutoDraw(true);
    }
    
    
    // if test_shape_R is active this frame...
    if (test_shape_R.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 1.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['s','d'] === 'string' ? [['s','d']] : ['s','d'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Test' ---
    for (const thisComponent of TestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Test.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SummaryMaxDurationReached;
var SummaryMaxDuration;
var SummaryComponents;
function SummaryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Summary' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SummaryClock.reset();
    routineTimer.reset();
    SummaryMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Summary.started', globalClock.getTime());
    SummaryMaxDuration = null
    // keep track of which components have finished
    SummaryComponents = [];
    
    for (const thisComponent of SummaryComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SummaryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Summary' ---
    // get current time
    t = SummaryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SummaryComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SummaryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Summary' ---
    for (const thisComponent of SummaryComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Summary.stopped', globalClock.getTime());
    // Send behavioral data CSV straight to OSF via DataPipe
    psychoJS.experiment.saveCSV({
        serialize: true,
        callback: function(csvData) {
            fetch("https://jspsych.org", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    experimentID: "3WpNjswWzizS",
                    filename: psychoJS.experiment.getParticipant() + "_" + psychoJS.experiment.getExpName() + "_" + psychoJS.experiment.getDatetime() + ".csv",
                    data: csvData
                })
            })
            .then(response => console.log("Data successfully sent to OSF!"))
            .catch(error => console.error("DataPipe Error:", error));
        }
    });
    
    // the Routine "Summary" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
