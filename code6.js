gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDGoalObjects1= [];
gdjs.Level_321Code.GDGoalObjects2= [];
gdjs.Level_321Code.GDGoalObjects3= [];
gdjs.Level_321Code.GDLadderObjects1= [];
gdjs.Level_321Code.GDLadderObjects2= [];
gdjs.Level_321Code.GDLadderObjects3= [];
gdjs.Level_321Code.GDVerical_95PlatformObjects1= [];
gdjs.Level_321Code.GDVerical_95PlatformObjects2= [];
gdjs.Level_321Code.GDVerical_95PlatformObjects3= [];
gdjs.Level_321Code.GDHorizontal_95PlatformObjects1= [];
gdjs.Level_321Code.GDHorizontal_95PlatformObjects2= [];
gdjs.Level_321Code.GDHorizontal_95PlatformObjects3= [];
gdjs.Level_321Code.GDMenu_95ButtonObjects1= [];
gdjs.Level_321Code.GDMenu_95ButtonObjects2= [];
gdjs.Level_321Code.GDMenu_95ButtonObjects3= [];
gdjs.Level_321Code.GDRestart_95ButtonObjects1= [];
gdjs.Level_321Code.GDRestart_95ButtonObjects2= [];
gdjs.Level_321Code.GDRestart_95ButtonObjects3= [];
gdjs.Level_321Code.GDJump_95ButtonObjects1= [];
gdjs.Level_321Code.GDJump_95ButtonObjects2= [];
gdjs.Level_321Code.GDJump_95ButtonObjects3= [];
gdjs.Level_321Code.GDButton_95TemplateObjects1= [];
gdjs.Level_321Code.GDButton_95TemplateObjects2= [];
gdjs.Level_321Code.GDButton_95TemplateObjects3= [];
gdjs.Level_321Code.GDRight_95ButtonObjects1= [];
gdjs.Level_321Code.GDRight_95ButtonObjects2= [];
gdjs.Level_321Code.GDRight_95ButtonObjects3= [];
gdjs.Level_321Code.GDLeft_95ButtonObjects1= [];
gdjs.Level_321Code.GDLeft_95ButtonObjects2= [];
gdjs.Level_321Code.GDLeft_95ButtonObjects3= [];
gdjs.Level_321Code.GDUp_95ButtonObjects1= [];
gdjs.Level_321Code.GDUp_95ButtonObjects2= [];
gdjs.Level_321Code.GDUp_95ButtonObjects3= [];
gdjs.Level_321Code.GDDown_95ButtonObjects1= [];
gdjs.Level_321Code.GDDown_95ButtonObjects2= [];
gdjs.Level_321Code.GDDown_95ButtonObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeft_9595ButtonObjects2Objects = Hashtable.newFrom({"Left_Button": gdjs.Level_321Code.GDLeft_95ButtonObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRight_9595ButtonObjects2Objects = Hashtable.newFrom({"Right_Button": gdjs.Level_321Code.GDRight_95ButtonObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJump_9595ButtonObjects2Objects = Hashtable.newFrom({"Jump_Button": gdjs.Level_321Code.GDJump_95ButtonObjects2});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_Button"), gdjs.Level_321Code.GDLeft_95ButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeft_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Button"), gdjs.Level_321Code.GDRight_95ButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRight_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Level_321Code.GDJump_95ButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJump_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Mobile Controls");
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs.Level_321Code.GDGoalObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.Level_321Code.GDGoalObjects1});gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.Level_321Code.GDGoalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects2Objects, false, runtimeScene, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.Level_321Code.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects1Objects, false, runtimeScene, true);
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects2Objects = Hashtable.newFrom({"Verical_Platform": gdjs.Level_321Code.GDVerical_95PlatformObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects2});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].setX(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFloorObjects2 */
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].getY() <= 32 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDVerical_95PlatformObjects2[k] = gdjs.Level_321Code.GDVerical_95PlatformObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDVerical_95PlatformObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].setY(32);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].getY() >= 488 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDVerical_95PlatformObjects2[k] = gdjs.Level_321Code.GDVerical_95PlatformObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDVerical_95PlatformObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects2[i].setY(488);
}
}}

}


{



}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects2Objects = Hashtable.newFrom({"Horizontal_Platform": gdjs.Level_321Code.GDHorizontal_95PlatformObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects = Hashtable.newFrom({"Horizontal_Platform": gdjs.Level_321Code.GDHorizontal_95PlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects = Hashtable.newFrom({"Verical_Platform": gdjs.Level_321Code.GDVerical_95PlatformObjects1});gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDHorizontal_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHorizontal_95PlatformObjects2[i].setY(192);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFloorObjects2 */
/* Reuse gdjs.Level_321Code.GDHorizontal_95PlatformObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDHorizontal_95PlatformObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHorizontal_95PlatformObjects2[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMenu_9595ButtonObjects2Objects = Hashtable.newFrom({"Menu_Button": gdjs.Level_321Code.GDMenu_95ButtonObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRestart_9595ButtonObjects1Objects = Hashtable.newFrom({"Restart_Button": gdjs.Level_321Code.GDRestart_95ButtonObjects1});gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.Level_321Code.GDMenu_95ButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMenu_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_Button"), gdjs.Level_321Code.GDRestart_95ButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRestart_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDGoalObjects1.length = 0;
gdjs.Level_321Code.GDGoalObjects2.length = 0;
gdjs.Level_321Code.GDGoalObjects3.length = 0;
gdjs.Level_321Code.GDLadderObjects1.length = 0;
gdjs.Level_321Code.GDLadderObjects2.length = 0;
gdjs.Level_321Code.GDLadderObjects3.length = 0;
gdjs.Level_321Code.GDVerical_95PlatformObjects1.length = 0;
gdjs.Level_321Code.GDVerical_95PlatformObjects2.length = 0;
gdjs.Level_321Code.GDVerical_95PlatformObjects3.length = 0;
gdjs.Level_321Code.GDHorizontal_95PlatformObjects1.length = 0;
gdjs.Level_321Code.GDHorizontal_95PlatformObjects2.length = 0;
gdjs.Level_321Code.GDHorizontal_95PlatformObjects3.length = 0;
gdjs.Level_321Code.GDMenu_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDMenu_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDMenu_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDRestart_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDRestart_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDRestart_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDJump_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDJump_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDJump_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDButton_95TemplateObjects1.length = 0;
gdjs.Level_321Code.GDButton_95TemplateObjects2.length = 0;
gdjs.Level_321Code.GDButton_95TemplateObjects3.length = 0;
gdjs.Level_321Code.GDRight_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDRight_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDRight_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDLeft_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDLeft_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDLeft_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDUp_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDUp_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDUp_95ButtonObjects3.length = 0;
gdjs.Level_321Code.GDDown_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDDown_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDDown_95ButtonObjects3.length = 0;

gdjs.Level_321Code.eventsList5(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
