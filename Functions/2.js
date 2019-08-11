// Let's make a Cat constructor!
var Cat = (function () {
    let length = 0; 
    let av = 0;
    var cat = function (name, weight) {
      if (!name || !weight) throw new Error('error')
      length++;
      av += weight;
      
      Object.defineProperty(this, 'weight', {
        set: function(new_weight) {
          av -= weight;
          av += new_weight;
          weight = new_weight;
        },
        
        get: function() {
          return weight;
        }
      })
    }
    
    cat.averageWeight = () => {
      return av / length;
    }
    return cat;
  }());