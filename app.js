const heroes = [
    {
        name: 'Strawberry Boy',
        damage: 5,
        health: 100,
        level: 1
    },
    {
        name: 'Burrito Boy',
        damage: 10,
        health: 100,
        level: 1
    }
]



// const damage {
//   hero1dmg = 0,
//   hero2dmg = 0,
//   bossdmg = 0,
// } 

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}


// status updates

function statusUpdate(hero1Dmg, hero2Dmg, bossDmg){
let hero1hp = document.getElementById("hero1health")
let hero2hp = document.getElementById("hero2health")
let bosshp = document.getElementById("bosshealth")
let target = Math.floor(Math.random() * 2) 
// console.log(target);
if (heroes[target].health <= 0)
return

if(target == 0){
  let newhero1hp = heroes[0].health -= bossDmg
  hero1hp.innerText = newhero1hp.toString()
  console.log('StrawberryBoy Attacked' , hero1Dmg);
  let newBosshp = boss.health -= hero1Dmg
  bosshp.innerText = newBosshp.toString()
  return
}
let newBosshp = boss.health -= hero2Dmg
  bosshp.innerText = newBosshp.toString()

let newhero2hp = heroes[1].health -= hero2Dmg
hero2hp.innerText = newhero2hp.toString()
  // console.log('Burrito Boy Attacked', hero2Dmg) ;
}


/* Attack */
function heroAttack(heroName){
  // console.log(heroName);
switch (heroName) {
  case "Strawberry Boy" : 
  let heroDamage = Math.floor(Math.random() * heroes[0].damage) 
  // console.log(heroDamage);
   let bossDamage = Math.floor(Math.random() * boss.damage)
  //  console.log(bossDamage);
   statusUpdate(heroDamage, 0, bossDamage)
   return
   case "Burrito Boy" : 
  let heroDamage1 = Math.floor(Math.random() * heroes[0].damage) 
  // console.log(heroDamage1);
   let bossDamage1 = Math.floor(Math.random() * boss.damage)
  //  console.log(bossDamage1);
   statusUpdate(0,heroDamage1,bossDamage1)
   return
   default:
    let bossDefaultDamage = Math.floor(Math.random() * boss.damage)
    console.log(bossDefaultDamage);
    statusUpdate(0,0,bossDefaultDamage)

}


}

/* section interval */
setInterval(heroAttack, 2000)


