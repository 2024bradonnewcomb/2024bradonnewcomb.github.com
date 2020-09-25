gdjs.Level_323Code = {};
gdjs.Level_323Code.GDPlayerObjects1= [];
gdjs.Level_323Code.GDPlayerObjects2= [];
gdjs.Level_323Code.GDPlayerObjects3= [];
gdjs.Level_323Code.GDFloorObjects1= [];
gdjs.Level_323Code.GDFloorObjects2= [];
gdjs.Level_323Code.GDFloorObjects3= [];
gdjs.Level_323Code.GDGoalObjects1= [];
gdjs.Level_323Code.GDGoalObjects2= [];
gdjs.Level_323Code.GDGoalObjects3= [];
gdjs.Level_323Code.GDLadderObjects1= [];
gdjs.Level_323Code.GDLadderObjects2= [];
gdjs.Level_323Code.GDLadderObjects3= [];
gdjs.Level_323Code.GDVerical_95Platform_952Objects1= [];
gdjs.Level_323Code.GDVerical_95Platform_952Objects2= [];
gdjs.Level_323Code.GDVerical_95Platform_952Objects3= [];
gdjs.Level_323Code.GDVerical_95Platform_951Objects1= [];
gdjs.Level_323Code.GDVerical_95Platform_951Objects2= [];
gdjs.Level_323Code.GDVerical_95Platform_951Objects3= [];
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects1= [];
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2= [];
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects3= [];
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects1= [];
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2= [];
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects3= [];
gdjs.Level_323Code.GDMenu_95ButtonObjects1= [];
gdjs.Level_323Code.GDMenu_95ButtonObjects2= [];
gdjs.Level_323Code.GDMenu_95ButtonObjects3= [];
gdjs.Level_323Code.GDRestart_95ButtonObjects1= [];
gdjs.Level_323Code.GDRestart_95ButtonObjects2= [];
gdjs.Level_323Code.GDRestart_95ButtonObjects3= [];
gdjs.Level_323Code.GDKill_95PlatformObjects1= [];
gdjs.Level_323Code.GDKill_95PlatformObjects2= [];
gdjs.Level_323Code.GDKill_95PlatformObjects3= [];
gdjs.Level_323Code.GDBluePortalObjects1= [];
gdjs.Level_323Code.GDBluePortalObjects2= [];
gdjs.Level_323Code.GDBluePortalObjects3= [];
gdjs.Level_323Code.GDOrange_95PortalObjects1= [];
gdjs.Level_323Code.GDOrange_95PortalObjects2= [];
gdjs.Level_323Code.GDOrange_95PortalObjects3= [];
gdjs.Level_323Code.GDJump_95ButtonObjects1= [];
gdjs.Level_323Code.GDJump_95ButtonObjects2= [];
gdjs.Level_323Code.GDJump_95ButtonObjects3= [];
gdjs.Level_323Code.GDLeft_95ButtonObjects1= [];
gdjs.Level_323Code.GDLeft_95ButtonObjects2= [];
gdjs.Level_323Code.GDLeft_95ButtonObjects3= [];
gdjs.Level_323Code.GDRight_95ButtonObjects1= [];
gdjs.Level_323Code.GDRight_95ButtonObjects2= [];
gdjs.Level_323Code.GDRight_95ButtonObjects3= [];

gdjs.Level_323Code.conditionTrue_0 = {val:false};
gdjs.Level_323Code.condition0IsTrue_0 = {val:false};
gdjs.Level_323Code.condition1IsTrue_0 = {val:false};
gdjs.Level_323Code.condition2IsTrue_0 = {val:false};
gdjs.Level_323Code.condition3IsTrue_0 = {val:false};


gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDLeft_9595ButtonObjects2Objects = Hashtable.newFrom({"Left_Button": gdjs.Level_323Code.GDLeft_95ButtonObjects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDRight_9595ButtonObjects2Objects = Hashtable.newFrom({"Right_Button": gdjs.Level_323Code.GDRight_95ButtonObjects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDJump_9595ButtonObjects2Objects = Hashtable.newFrom({"Jump_Button": gdjs.Level_323Code.GDJump_95ButtonObjects2});gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_Button"), gdjs.Level_323Code.GDLeft_95ButtonObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
gdjs.Level_323Code.condition1IsTrue_0.val = false;
gdjs.Level_323Code.condition2IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDLeft_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_323Code.condition0IsTrue_0.val ) {
{
gdjs.Level_323Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_323Code.condition1IsTrue_0.val ) {
{
gdjs.Level_323Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
}
if (gdjs.Level_323Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Button"), gdjs.Level_323Code.GDRight_95ButtonObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
gdjs.Level_323Code.condition1IsTrue_0.val = false;
gdjs.Level_323Code.condition2IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDRight_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_323Code.condition0IsTrue_0.val ) {
{
gdjs.Level_323Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_323Code.condition1IsTrue_0.val ) {
{
gdjs.Level_323Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
}
if (gdjs.Level_323Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Level_323Code.GDJump_95ButtonObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
gdjs.Level_323Code.condition1IsTrue_0.val = false;
gdjs.Level_323Code.condition2IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDJump_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_323Code.condition0IsTrue_0.val ) {
{
gdjs.Level_323Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_323Code.condition1IsTrue_0.val ) {
{
gdjs.Level_323Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
}
if (gdjs.Level_323Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Mobile Controls");
}}

}


};gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.Level_323Code.GDGoalObjects1});gdjs.Level_323Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.Level_323Code.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}}

}


};gdjs.Level_323Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_1"), gdjs.Level_323Code.GDVerical_95Platform_951Objects2);
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i].setX(98);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_2"), gdjs.Level_323Code.GDVerical_95Platform_952Objects2);
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i].setX(166);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_1"), gdjs.Level_323Code.GDVerical_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i].getY() <= 0 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDVerical_95Platform_951Objects2[k] = gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDVerical_95Platform_951Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i].setY(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_2"), gdjs.Level_323Code.GDVerical_95Platform_952Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i].getY() <= 0 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDVerical_95Platform_952Objects2[k] = gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDVerical_95Platform_952Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i].setY(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_1"), gdjs.Level_323Code.GDVerical_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i].getY() >= 42 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDVerical_95Platform_951Objects2[k] = gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDVerical_95Platform_951Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_951Objects2[i].setY(42);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_2"), gdjs.Level_323Code.GDVerical_95Platform_952Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i].getY() >= 42 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDVerical_95Platform_952Objects2[k] = gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDVerical_95Platform_952Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDVerical_95Platform_952Objects2[i].setY(42);
}
}}

}


{



}


};gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects = Hashtable.newFrom({"Horizontal_Platform_1": gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95951Objects2Objects = Hashtable.newFrom({"Verical_Platform_1": gdjs.Level_323Code.GDVerical_95Platform_951Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects = Hashtable.newFrom({"Horizontal_Platform_1": gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95952Objects2Objects = Hashtable.newFrom({"Verical_Platform_2": gdjs.Level_323Code.GDVerical_95Platform_952Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95952Objects2Objects = Hashtable.newFrom({"Horizontal_Platform_2": gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95951Objects2Objects = Hashtable.newFrom({"Verical_Platform_1": gdjs.Level_323Code.GDVerical_95Platform_951Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95952Objects2Objects = Hashtable.newFrom({"Horizontal_Platform_2": gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95952Objects2Objects = Hashtable.newFrom({"Verical_Platform_2": gdjs.Level_323Code.GDVerical_95Platform_952Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects = Hashtable.newFrom({"Horizontal_Platform_1": gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDKill_9595PlatformObjects2Objects = Hashtable.newFrom({"Kill_Platform": gdjs.Level_323Code.GDKill_95PlatformObjects2});gdjs.Level_323Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_2"), gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2[i].getX() >= 246 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2[k] = gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2[i].setX(246);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_1"), gdjs.Level_323Code.GDVerical_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95951Objects2Objects, false, runtimeScene, true);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_2"), gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2);
{for(var i = 0, len = gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2[i].setY(229);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_2"), gdjs.Level_323Code.GDVerical_95Platform_952Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95952Objects2Objects, false, runtimeScene, true);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);
{for(var i = 0, len = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i].setY(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_2"), gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_1"), gdjs.Level_323Code.GDVerical_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95952Objects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95951Objects2Objects, false, runtimeScene, true);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_2"), gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform_2"), gdjs.Level_323Code.GDVerical_95Platform_952Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95952Objects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDVerical_9595Platform_95952Objects2Objects, false, runtimeScene, true);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Kill_Platform"), gdjs.Level_323Code.GDKill_95PlatformObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDHorizontal_9595Platform_95951Objects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDKill_9595PlatformObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i].getX() >= 136 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[k] = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i].setX(136);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform_1"), gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i].getX() <= 96 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[k] = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2[i].setX(96);
}
}}

}


{



}


};gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMenu_9595ButtonObjects2Objects = Hashtable.newFrom({"Menu_Button": gdjs.Level_323Code.GDMenu_95ButtonObjects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDRestart_9595ButtonObjects1Objects = Hashtable.newFrom({"Restart_Button": gdjs.Level_323Code.GDRestart_95ButtonObjects1});gdjs.Level_323Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.Level_323Code.GDMenu_95ButtonObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
gdjs.Level_323Code.condition1IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMenu_9595ButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level_323Code.condition0IsTrue_0.val ) {
{
gdjs.Level_323Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_323Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_Button"), gdjs.Level_323Code.GDRestart_95ButtonObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
gdjs.Level_323Code.condition1IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDRestart_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_323Code.condition0IsTrue_0.val ) {
{
gdjs.Level_323Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_323Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 3");
}}

}


};gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDKill_9595PlatformObjects1Objects = Hashtable.newFrom({"Kill_Platform": gdjs.Level_323Code.GDKill_95PlatformObjects1});gdjs.Level_323Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Kill_Platform"), gdjs.Level_323Code.GDKill_95PlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDKill_9595PlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDBluePortalObjects2Objects = Hashtable.newFrom({"BluePortal": gdjs.Level_323Code.GDBluePortalObjects2});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDOrange_9595PortalObjects1Objects = Hashtable.newFrom({"Orange_Portal": gdjs.Level_323Code.GDOrange_95PortalObjects1});gdjs.Level_323Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePortal"), gdjs.Level_323Code.GDBluePortalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects2);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects2Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDBluePortalObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects2[i].setPosition(16,430);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Orange_Portal"), gdjs.Level_323Code.GDOrange_95PortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDOrange_9595PortalObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].setPosition(463,178);
}
}}

}


};gdjs.Level_323Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level_323Code.eventsList0(runtimeScene);
}


{


gdjs.Level_323Code.eventsList1(runtimeScene);
}


{


gdjs.Level_323Code.eventsList2(runtimeScene);
}


{


gdjs.Level_323Code.eventsList3(runtimeScene);
}


{


gdjs.Level_323Code.eventsList4(runtimeScene);
}


{


gdjs.Level_323Code.eventsList5(runtimeScene);
}


{


gdjs.Level_323Code.eventsList6(runtimeScene);
}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDPlayerObjects1.length = 0;
gdjs.Level_323Code.GDPlayerObjects2.length = 0;
gdjs.Level_323Code.GDPlayerObjects3.length = 0;
gdjs.Level_323Code.GDFloorObjects1.length = 0;
gdjs.Level_323Code.GDFloorObjects2.length = 0;
gdjs.Level_323Code.GDFloorObjects3.length = 0;
gdjs.Level_323Code.GDGoalObjects1.length = 0;
gdjs.Level_323Code.GDGoalObjects2.length = 0;
gdjs.Level_323Code.GDGoalObjects3.length = 0;
gdjs.Level_323Code.GDLadderObjects1.length = 0;
gdjs.Level_323Code.GDLadderObjects2.length = 0;
gdjs.Level_323Code.GDLadderObjects3.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_952Objects1.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_952Objects2.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_952Objects3.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_951Objects1.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_951Objects2.length = 0;
gdjs.Level_323Code.GDVerical_95Platform_951Objects3.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects1.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects2.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_952Objects3.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects1.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects2.length = 0;
gdjs.Level_323Code.GDHorizontal_95Platform_951Objects3.length = 0;
gdjs.Level_323Code.GDMenu_95ButtonObjects1.length = 0;
gdjs.Level_323Code.GDMenu_95ButtonObjects2.length = 0;
gdjs.Level_323Code.GDMenu_95ButtonObjects3.length = 0;
gdjs.Level_323Code.GDRestart_95ButtonObjects1.length = 0;
gdjs.Level_323Code.GDRestart_95ButtonObjects2.length = 0;
gdjs.Level_323Code.GDRestart_95ButtonObjects3.length = 0;
gdjs.Level_323Code.GDKill_95PlatformObjects1.length = 0;
gdjs.Level_323Code.GDKill_95PlatformObjects2.length = 0;
gdjs.Level_323Code.GDKill_95PlatformObjects3.length = 0;
gdjs.Level_323Code.GDBluePortalObjects1.length = 0;
gdjs.Level_323Code.GDBluePortalObjects2.length = 0;
gdjs.Level_323Code.GDBluePortalObjects3.length = 0;
gdjs.Level_323Code.GDOrange_95PortalObjects1.length = 0;
gdjs.Level_323Code.GDOrange_95PortalObjects2.length = 0;
gdjs.Level_323Code.GDOrange_95PortalObjects3.length = 0;
gdjs.Level_323Code.GDJump_95ButtonObjects1.length = 0;
gdjs.Level_323Code.GDJump_95ButtonObjects2.length = 0;
gdjs.Level_323Code.GDJump_95ButtonObjects3.length = 0;
gdjs.Level_323Code.GDLeft_95ButtonObjects1.length = 0;
gdjs.Level_323Code.GDLeft_95ButtonObjects2.length = 0;
gdjs.Level_323Code.GDLeft_95ButtonObjects3.length = 0;
gdjs.Level_323Code.GDRight_95ButtonObjects1.length = 0;
gdjs.Level_323Code.GDRight_95ButtonObjects2.length = 0;
gdjs.Level_323Code.GDRight_95ButtonObjects3.length = 0;

gdjs.Level_323Code.eventsList7(runtimeScene);
return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
