class AttackSkill {
  constructor(aName, aDamage, aMagic) {
    this.name = aName;
    this.magic = aMagic;
    this.damage = aDamage;
  }
}

class Pokemon {
  constructor(aName) {
    this.name = aName;
    this.health = 100;
    this.magic = 100;
    this.skills = [];
  }
  learnAttackSkill(aAttackSkill) {
    this.skills.push(aAttackSkill);
  }
  showStatus() {
    let status = `${this.name} : health=${this.health} magic=${this.magic}`;
    console.log(status);
    return status;
  }
  attack(aAttackIndex, aPokemon) {
    let result = `too weak`;
    let usedSkill = this.skills[aAttackIndex];
    if (usedSkill && this.magic >= usedSkill.magic) {
      // enough magic?
      this.magic -= usedSkill.magic; // decrease own magic
      aPokemon.health -= usedSkill.damage; // decrease others health
      result = `success`;
    }
    console.log(result);
    return result;
  }
  increaseMagic(aIncrease) {
    return (this.magic += aIncrease);
  }
}

let lightning = new AttackSkill("lightning", 40, 30);
let struggling = new AttackSkill("struggling", 30, 20);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);


let xyPokemon = new Pokemon("XiuYoo");
xyPokemon.learnAttackSkill(lightning)//0
xyPokemon.learnAttackSkill(struggling)//1
let wyPokemon = new Pokemon("wwwYYY");
wyPokemon.learnAttackSkill(struggling)//0
wyPokemon.learnAttackSkill(poisonSeed)//1

xyPokemon.showStatus()
wyPokemon.showStatus()

xyPokemon.attack(0, wyPokemon)

xyPokemon.showStatus()
wyPokemon.showStatus()
xyPokemon.increaseMagic(100)

