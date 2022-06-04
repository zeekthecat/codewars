/*
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

7kyu
*/

function ghostBusters(building){
    return building.includes(' ') ? building.split(' ').join('') : "You just wanted my autograph didn't you?"
}