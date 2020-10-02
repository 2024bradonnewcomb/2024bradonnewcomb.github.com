gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDStartObjects1= [];
gdjs.Main_32MenuCode.GDStartObjects2= [];
gdjs.Main_32MenuCode.GDLevel_95SelectObjects1= [];
gdjs.Main_32MenuCode.GDLevel_95SelectObjects2= [];
gdjs.Main_32MenuCode.GDDemoObjects1= [];
gdjs.Main_32MenuCode.GDDemoObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDSwitchOffObjects1= [];
gdjs.Main_32MenuCode.GDSwitchOffObjects2= [];
gdjs.Main_32MenuCode.GDSwitchOnObjects1= [];
gdjs.Main_32MenuCode.GDSwitchOnObjects2= [];
gdjs.Main_32MenuCode.GDSwitchBackObjects1= [];
gdjs.Main_32MenuCode.GDSwitchBackObjects2= [];
gdjs.Main_32MenuCode.GDM_95ControlsObjects1= [];
gdjs.Main_32MenuCode.GDM_95ControlsObjects2= [];
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDArrowObjects1= [];
gdjs.Main_32MenuCode.GDArrowObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDLevel_9595SelectObjects1Objects = Hashtable.newFrom({"Level_Select": gdjs.Main_32MenuCode.GDLevel_95SelectObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDemoObjects1Objects = Hashtable.newFrom({"Demo": gdjs.Main_32MenuCode.GDDemoObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSwitchBackObjects1Objects = Hashtable.newFrom({"SwitchBack": gdjs.Main_32MenuCode.GDSwitchBackObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_Select"), gdjs.Main_32MenuCode.GDLevel_95SelectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDLevel_9595SelectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Demo"), gdjs.Main_32MenuCode.GDDemoObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDemoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Demo", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SwitchBack"), gdjs.Main_32MenuCode.GDSwitchBackObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSwitchBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8637524);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).mul(-(1));
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SwitchOff"), gdjs.Main_32MenuCode.GDSwitchOffObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwitchOn"), gdjs.Main_32MenuCode.GDSwitchOnObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSwitchOnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSwitchOnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSwitchOffObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSwitchOffObjects1[i].hide(false);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SwitchOff"), gdjs.Main_32MenuCode.GDSwitchOffObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwitchOn"), gdjs.Main_32MenuCode.GDSwitchOnObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSwitchOffObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSwitchOffObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSwitchOnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSwitchOnObjects1[i].hide(false);
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDStartObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevel_95SelectObjects1.length = 0;
gdjs.Main_32MenuCode.GDLevel_95SelectObjects2.length = 0;
gdjs.Main_32MenuCode.GDDemoObjects1.length = 0;
gdjs.Main_32MenuCode.GDDemoObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDSwitchOffObjects1.length = 0;
gdjs.Main_32MenuCode.GDSwitchOffObjects2.length = 0;
gdjs.Main_32MenuCode.GDSwitchOnObjects1.length = 0;
gdjs.Main_32MenuCode.GDSwitchOnObjects2.length = 0;
gdjs.Main_32MenuCode.GDSwitchBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDSwitchBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDM_95ControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDM_95ControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDArrowObjects1.length = 0;
gdjs.Main_32MenuCode.GDArrowObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
