importPackage(Packages.tools.RandomStream);
importPackage(Packages.packet.creators);
importPackage(Packages.client.items);
importPackage(Packages.server.items);
importPackage(Packages.launch.world);
importPackage(Packages.main.world);
importPackage(Packages.database);
importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.stats);
importPackage(Packages.constants.GameConstants)

var enter = "\r\n";
var seld = -1;
var level = -1, ap = -1, ���� = -1, ȯ�� = -1;

var �±� = false; // advancement

var ȯ������ = 2040030;

var ȯ������ = 3003325;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, sel) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
    	}
	if (status == 0) {
		var en1 = cm.getQuestRecord(201801); // step
		var en2 = cm.getQuestRecord(201802); // Cumulative ap
		var en4 = cm.getQuestRecord(201804); // Reincarnation Point
		if (en1.getCustomData() == null || en1.getCustomData() < 0) en1.setCustomData("0");
		if (en2.getCustomData() == null || en2.getCustomData() < 0) en2.setCustomData("600");
		if (en4.getCustomData() == null || en4.getCustomData() < 0) en4.setCustomData("0");
		ap = cm.parseInt(en2.getCustomData());
		level = cm.parseInt(en1.getCustomData());
                playerRB = cm.getPlayer().getReborns();
		���� = cm.getPlayer().getReborns();
		ȯ�� = cm.parseInt(en4.getCustomData());
                rebirth = cm.getPlayer().getReborns() + 100;
                tier = cm.getPlayer().getTierReborns();
            if (cm.getPlayer().getLevel() == 275) {
              cm.sendSimple("You think that is over? NO!\r\nBut here is a free level!")
              cm.getPlayer().levelUp();
              cm.dispose();
            }
            if (cm.getPlayer().getReborns() >= 250 && tier >= 2 && cm.getPlayer().getReborns() != 800){
            //msg += "#L4##fUI/FarmUI.img/objectStatus/star/whole# Rebirth & Change job (Requires rebirth level 250+) \r\n";
            }
			if (cm.getPlayer().getReborns() != 50 && cm.getPlayer().getTierReborns() == 0 ||
                                cm.getPlayer().getReborns() != 100 && cm.getPlayer().getTierReborns() == 1 ||
                                cm.getPlayer().getReborns() != 200 && cm.getPlayer().getTierReborns() == 2  ||
                                cm.getPlayer().getReborns() != 300 && cm.getPlayer().getTierReborns() == 3  ||
                                cm.getPlayer().getReborns() != 400 && cm.getPlayer().getTierReborns() == 4  ||
                                cm.getPlayer().getReborns() != 500 && cm.getPlayer().getTierReborns() == 5  ||
                                cm.getPlayer().getReborns() != 650 && cm.getPlayer().getTierReborns() == 6 ||
                                cm.getPlayer().getReborns() != 800 && cm.getPlayer().getTierReborns() == 7)  {
				if (cm.getPlayer().getLevel() < rebirth && cm.getPlayer().getLevel() < 801) {
					cm.sendOk("RB Level:" + playerRB + "\r\nYour next rebirth level is at '"+rebirth+"'.");
					cm.dispose();
					return;
				}
        		if (canInc()) {
        			var en1 = cm.getQuestRecord(201801); // step
        			en1.setCustomData((level + 1) + "");
        			�±� = true;
        		}
        		���� = Randomizer.rand(1, getAq(cm.parseInt(cm.getQuestRecord(201801).getCustomData())));
        		��ȯ = Randomizer.rand(getPqmin(cm.parseInt(cm.getQuestRecord(201801).getCustomData())), getPqmax(cm.parseInt(cm.getQuestRecord(201801).getCustomData())));

        		var msg = "#fs11#Rebirth Complete.#fs11#"+enter;
        		if (�±�) msg += "�� Congratulations! "+(level + 1)+" Tier has been reached!"+enter;
        		//msg += "�� ���� AP : "+(ap+����)+" #b(+"+����+")#k"+enter;
        		msg += "�� Rebirth Points : "+(��ȯ+ȯ��)+" #b(+"+��ȯ+")#k";
                        cm.getPlayer().setReborns(cm.getPlayer().getReborns() + 1);
                        cm.getPlayer().setLevel(cm.getPlayer().getLevel() - 50);
                        cm.getPlayer().levelUp();
                        cm.updateChar();
                        cm.fakeRelog();
                        cm.changeJob(cm.getPlayer().getJob());
        		cm.sendOk(msg);
        		cm.CountAdd("ȯ��co", 1);
        		if (cm.getPlayer().getDateKey("quest1", false) != null) {
        			cm.CountAdd("questD1", 1);
        		}

        		cm.getQuestRecord(201802).setCustomData((ap+����)+"");
        		cm.getQuestRecord(201804).setCustomData((ȯ�� + ��ȯ) + "");

        		/*cm.getPlayer().setLevel(160); // Level initialization
        		cm.getPlayer().resetStats(4,4,4,4); // Stat Revert
        		cm.getPlayer().setAp(0); // Stat to zero
        		cm.getPlayer().gainAp(ap+����); // Stat payment
                        */
                       if (cm.getPlayer().getReborns() == 1){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                       if (cm.getPlayer().getReborns() == 5){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                       if (cm.getPlayer().getReborns() == 15){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 30){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 45){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 60){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 75){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 100){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 125){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 150){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 200){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 225){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 250){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 300){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 350){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 400){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 450){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 500){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 550){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 600){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 650){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 700){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 750){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }
                        if (cm.getPlayer().getReborns() == 800){
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(23, "[Rebirth] " + cm.getPlayer().getName() + " has rebirthed " + cm.getPlayer().getReborns() + " times!"));
                        }


                    //5, 15, 30, 45, 60, 75, 100, 125, 150, 200, 225, 250, 300, 350, 400, 450.
        		//WorldBroadcasting.broadcast(MainPacketCreator.getGMText(7, "[Notice] "+ cm.getPlayer().getName()+" By "+cm.getPlayer().getReborns()+" Considerable reincarnation."));
        		//MasterHyper();
        	} else {

                   cm.getPlayer().setTierReborns(cm.getPlayer().getTierReborns() + 1);
                   cm.sendOk("Here is your Tier Advance, congratz!\r\nYou are now at Tier #r" + cm.getPlayer().getTierReborns());
                   cm.dispose();


	}

        if (status == 1) {
		//cm.getPlayer().fakeRelog(); // Reload
		cm.dispose();
	}
    }
}

function getLevel(lvl) {
	def = 200;
	ret = 5 * (lvl + 1);
	return lvl == 0 ? 210 : def + ret;
}

function getNeed(lvl) {
	return lvl == 0 ? 50 : lvl == 1 ? 200 : lvl == 2 ? 400 : lvl == 3 ? 600 : lvl == 4 ? 800 : lvl == 5 ? 1000 : lvl == 6 ? 2000 : -1;
}

function canInc() {
	return (���� + 1) == getNeed(level) ? true : false;
}

function getAq(lvl) {
	return lvl == 0 ? 5 : lvl == 1 ? 5 : lvl == 2 ? 7 : lvl == 3 ? 9 : lvl == 4 ? 10 : lvl == 5 ? 12 : lvl == 6 ? 15 : 20;
}

function getPqmin(lvl) {
	return lvl == 0 ? 15 : lvl == 1 ? 30 : lvl == 2 ? 50 : lvl == 3 ? 70 : lvl == 4 ? 100 : lvl == 5 ? 200 : lvl == 6 ? 200 : 200;
}

function getPqmax(lvl) {
	return lvl == 0 ? 100 : lvl == 1 ? 100 : lvl == 2 ? 100 : lvl == 3 ? 100 : lvl == 4 ? 200 : lvl == 5 ? 300 : lvl == 6 ? 400 : 400;
}

function MasterHyper() {
	cm.teachSkill(80000400, 10);
	cm.teachSkill(80000401, 10);
	cm.teachSkill(80000402, 10);
	cm.teachSkill(80000403, 10);
	cm.teachSkill(80000404, 10);
	cm.teachSkill(80000405, 10);
	cm.teachSkill(80000406, 5);
	cm.teachSkill(80000407, 5);
	cm.teachSkill(80000408, 5);
	cm.teachSkill(80000409, 10);
	cm.teachSkill(80000410, 10);
	cm.teachSkill(80000411, 10);
	cm.teachSkill(80000412, 10);
	cm.teachSkill(80000413, 10);
	cm.teachSkill(80000414, 10);
	cm.teachSkill(80000415, 5);
	cm.teachSkill(80000416, 10);
	cm.teachSkill(80000417, 5);
}
