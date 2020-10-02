gdjs.IntroCode = {};
gdjs.IntroCode.GDStartObjects1= [];
gdjs.IntroCode.GDStartObjects2= [];
gdjs.IntroCode.GDLevel_95SelectObjects1= [];
gdjs.IntroCode.GDLevel_95SelectObjects2= [];
gdjs.IntroCode.GDDemoObjects1= [];
gdjs.IntroCode.GDDemoObjects2= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDSwitchOffObjects1= [];
gdjs.IntroCode.GDSwitchOffObjects2= [];
gdjs.IntroCode.GDSwitchOnObjects1= [];
gdjs.IntroCode.GDSwitchOnObjects2= [];
gdjs.IntroCode.GDSwitchBackObjects1= [];
gdjs.IntroCode.GDSwitchBackObjects2= [];
gdjs.IntroCode.GDM_95ControlsObjects1= [];
gdjs.IntroCode.GDM_95ControlsObjects2= [];
gdjs.IntroCode.GDNewObjectObjects1= [];
gdjs.IntroCode.GDNewObjectObjects2= [];
gdjs.IntroCode.GDArrowObjects1= [];
gdjs.IntroCode.GDArrowObjects2= [];
gdjs.IntroCode.GDPhoneVObjects1= [];
gdjs.IntroCode.GDPhoneVObjects2= [];
gdjs.IntroCode.GDPhoneHObjects1= [];
gdjs.IntroCode.GDPhoneHObjects2= [];
gdjs.IntroCode.GDRArrowObjects1= [];
gdjs.IntroCode.GDRArrowObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Clock");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDStartObjects1.length = 0;
gdjs.IntroCode.GDStartObjects2.length = 0;
gdjs.IntroCode.GDLevel_95SelectObjects1.length = 0;
gdjs.IntroCode.GDLevel_95SelectObjects2.length = 0;
gdjs.IntroCode.GDDemoObjects1.length = 0;
gdjs.IntroCode.GDDemoObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDSwitchOffObjects1.length = 0;
gdjs.IntroCode.GDSwitchOffObjects2.length = 0;
gdjs.IntroCode.GDSwitchOnObjects1.length = 0;
gdjs.IntroCode.GDSwitchOnObjects2.length = 0;
gdjs.IntroCode.GDSwitchBackObjects1.length = 0;
gdjs.IntroCode.GDSwitchBackObjects2.length = 0;
gdjs.IntroCode.GDM_95ControlsObjects1.length = 0;
gdjs.IntroCode.GDM_95ControlsObjects2.length = 0;
gdjs.IntroCode.GDNewObjectObjects1.length = 0;
gdjs.IntroCode.GDNewObjectObjects2.length = 0;
gdjs.IntroCode.GDArrowObjects1.length = 0;
gdjs.IntroCode.GDArrowObjects2.length = 0;
gdjs.IntroCode.GDPhoneVObjects1.length = 0;
gdjs.IntroCode.GDPhoneVObjects2.length = 0;
gdjs.IntroCode.GDPhoneHObjects1.length = 0;
gdjs.IntroCode.GDPhoneHObjects2.length = 0;
gdjs.IntroCode.GDRArrowObjects1.length = 0;
gdjs.IntroCode.GDRArrowObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
