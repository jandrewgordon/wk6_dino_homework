 const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
 }

 Park.prototype.addDinosaur = function(dinosaur){
     this.dinoCollection.push(dinosaur);   
 }
 
 Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinoCollection.indexOf(dinosaur);
    this.dinoCollection.splice(indexOfDinosaur, 1);
 }

 Park.prototype.mostPopularDino = function(){
    let mostPopular = 0
    let dinoPopularity = 0 
    for(dino of this.dinoCollection){
        dinoPopularity = dino.guestsAttractedPerDay;
        if(dinoPopularity > mostPopular){
            mostPopular = dinoPopularity
        }
    }
    
    for(dino of this.dinoCollection){
        if(dino.guestsAttractedPerDay == mostPopular){
            return dino
        }
    }
    
 }

 Park.prototype.findAllByType = function(string){
    let foundList = [] 
    for(dino of this.dinoCollection){
         if(dino.species == string){
            foundList.push(dino);
         }
    }
    return foundList;

 }

 Park.prototype.totalVisitorsPerDay = function(){
    let totalVisitors = 0
    for(dino of this.dinoCollection){
        totalVisitors += dino.guestsAttractedPerDay
    }
    return totalVisitors;
 }

 Park.prototype.visitorsPerYear = function(){
    let totalVisitors = this.totalVisitorsPerDay()
    return (totalVisitors * 365)
 }

 Park.prototype.annualRevenue = function(park){
    let annualRevenue = (this.visitorsPerYear() * park.ticketPrice);
    return annualRevenue;
 }
module.exports = Park