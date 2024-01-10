export function getSeasonal() {
    // format new date.js Date to get month in integer (0-11)
    const month = new Date().getMonth();

      if (month === 11 || month <= 1) {
        // December - February
        var season = 'Winter';
        // array of ids of 3 popular winter recipes
        var recIds = ['634703', '658024', '639569']; // beef tenderloin, minestrone soup, beef stew
        return recIds;
    
      } else if(month > 1 && month <= 4) {
        // February - May
        var season = 'Spring';
        // array of ids of 3 popular winter recipes
        var recIds = [];
        return recIds;

      } else if(month > 4 && month <= 7) {
        // June - August
        var season = 'Summer';
        // array of ids of 3 popular summer recipes
        var recIds = ['1697631']; // watermelon lemonade
        return recIds;

      } else if(month > 7 && month < 11) {
        // August - November
        var season = 'Autumn'
        // array of ids of 3 popular autumn recipes
        var recIds = ['658522','665146','639631']; // butternut squash soup, turkey chili, pumpkin pie
        return recIds;
    }
}




