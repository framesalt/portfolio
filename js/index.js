var primaryColor = '#337ab7';

var canvas = d3.select('body').append('div')
                    .classed('svg-container', true)
                      .append('svg')
                        .classed('svg-content',true);
                  
canvas.attr({
        'version': '1.1',
       'viewBox': '0 0 600 600',
        'preserveAspectRatio': 'xMinYMin meet'});

function getPathData() {
        // adjust the radius a little so our text's baseline isn't sitting directly on the circle
        var r = 90 * 0.95;
        var startX = 500/2 - r;
        return 'm' + startX + ',' + (40) + ' ' +
          'a' + r + ',' + r + ' 0 0 0 ' + (2*r) + ',0';
      }

var hireMe = canvas.append('g').attr('name', 'H')
                        .attr('class', 'mNode'); // changed to '1node' from 'node' cause line 397 
(function(canvas){
  
  canvas.append('defs')
        .append('path')
        .attr({
          d: getPathData,
          id: 'curvedTextPath'
        });
  
  canvas.append('path')
        .attr({
          d: getPathData,
          id: 'visiblePath',
          fill: 'white',
          stroke: primaryColor
        });
  canvas.append('text')
        .append('textPath')
        .attr({
          startOffset: '15%',
          'xlink:href': '#curvedTextPath',
          fill: primaryColor
        })
        .text('stvarnomail@gmail.com');
  
  
        canvas.append('text')
                .attr({
                  'x': 220,
                  'y': 60,
                  'fill': primaryColor})
                .text('hire me');
  
  canvas.append('line')
        .attr({
          x1: 165,
          y1: 40,
          x2: 335,
          y2: 40
  })
        .style({
          stroke: primaryColor,
          'stroke-width': 2
  });
  
  
  
})(hireMe);


var primary = canvas.append('g').attr('name', 'P')
                        .attr('class', 'mNode');
(function(canvas){
  
  var formated = [
	//[150,  215],
 {
      coords: [113, 188],//228],
      text: 'd3',
      link: 'https://codepen.io/ustvarno/full/pbawYJ',
	offset: 10
},
 {
      coords: [86, 216],//256],
      text: 'd3',
      link: 'https://codepen.io/ustvarno/full/AXyQEy',
	offset: 10
},
 {
      coords: [72, 253],//293],
      text: 'd3',
      link: 'https://codepen.io/ustvarno/full/VjdWZw',
	offset: 10
},
 {
      coords: [75, 292],//332],
      text: 'd3',
      link: 'https://codepen.io/ustvarno/full/bZLbpA',
	offset: 10
},
 {
      coords: [96, 325],//365],
      text: 'd3',
      link: 'https://codepen.io/ustvarno/full/EyQaWQ',
	offset: 10
},
 {
      coords: [133, 339],//379],
      text: 'rea',
      link: 'https://codepen.io/ustvarno/full/VjKGqo',
	offset: 12
},
 {
      coords: [172, 336],//376],
      text: 'rea',
      link: 'https://codepen.io/ustvarno/full/grGJGZ',
	offset: 12
},
 {
      coords: [206, 320],//360],
      text: 'rea',
      link: 'https://codepen.io/ustvarno/full/KMzqeW',
	offset: 12
},
 {
      coords: [226, 288],//328],
      text: 'rea',
      link: 'https://codepen.io/ustvarno/full/VjPQdY',
	offset: 12
},
 {
      coords: [228, 250],//290],
      text: 's',
      link: 'https://codepen.io/ustvarno/full/bpXMNN',
	offset: 3
},
 {
      coords: [220, 210],//250],
      text: 's',
      link: 'https://codepen.io/ustvarno/full/gMpvPE',
	offset: 3
},
 {
      coords: [188, 184],//224],
      text: 's',
      link: 'https://codepen.io/ustvarno/full/JXgGye',
	offset: 3
},
 {

	coords: [118, 256],//296],
	text:'html',
	nonClickAble: true,
	fill: 'blue',
	offset: 17,
  r: 22

},
{
	coords: [140, 220],//260],
	text: 'scss',
	nonClickAble: true,
	fill: 'blue',
	offset: 17,
  r: 20
},
{
	coords: [178, 236],//276],
	text: 'js',
	nonClickAble: true,
	fill: 'blue',
	offset: 6
},
{
	coords: [175, 278],//318],
	text: 'react',
	nonClickAble: true,
	fill: 'blue',
	offset: 20,
  r: 23
},
{
	coords: [136, 294],//334],
	text: 'd3',
	nonClickAble: true,
	fill: 'blue',
	offset: 10
}];
  
  
 canvas.append('circle')
        .attr({
            'cx': 150,
            'cy': 260,
            'r': 80,
            'fill': 'white',
            'stroke': '#337ab7',
            'stroke-width': 3 });
 
  
  var g = canvas.selectAll('g')
          .data(formated)
          .enter().append('g');
  
  
          g.append('circle')
          .attr({
            'cx': function(d){
            return d.coords[0];
            },
            'cy': function(d){
            return d.coords[1];
            },
            'r': function(d){
            return d.r ? d.r : 18;
            },
            'fill': function(d){
            return 'white';
            },
            'stroke-width': 2,
            'stroke': '#337ab7' })
          .style('opacity', 0.8);
  
         g.append('text')
            .attr({
           'x': function(d,i){
            return  d.coords[0] - d.offset;
            },
           'y': function(d){
            return d.coords[1]+4;
            },
            'fill': primaryColor })
            .text( function(d,i){
            return d.text;
         })
            
            
            g.on('click', function(d){
           
              if ( !d.link)
                return;
              
              var wrap = d3.select(this);
              wrap.select('circle')
                    .attr('fill', '#337ab7');
              wrap.select('text')
                    .attr('fill', 'white');
           window.open(d.link);
           
         });

  
  
})(primary);


var secondary = canvas.append('g').attr('name', 'S')
                        .attr('class', 'mNode');
(function(canvas){
  
  var formated = [
    {
      coords: [370, 280],
      text: 'other:'
    },
    {
      coords: [380, 355],
      text: 'git'
    },
    {
      coords: [355, 340],
      text: 'animation'
},
    {
      coords: [348, 325],
      text: 'android (java)'
},
    {
      coords: [340, 310],
      text: 'unity editor (c#)'
},
    {
      coords: [275, 295],
      text: 'microcontroller (arduino (c, js))',
      size: 13
}
    
  ];
 
 canvas.append('circle')
          .attr({
            'cx': 380, //320,
            'cy': 300,//400,
            'r': 110,
            'fill': 'white',
            'stroke': '#337ab7',
            'stroke-width': 3 });
 
    var g = canvas.append('g');
    
    g.selectAll('text')
        .data(formated)
          .enter()
            .append('text')
              .attr({
      'font-size': function(d){ return d.size ? d.size : 15;},
      'x': function(d){ return d.coords[0]},
      'y': function(d){ return d.coords[1]},
      'fill': primaryColor })
              .text(function(d){ return d.text });
  
  
})(secondary);

canvas.append('line')
        .attr({
          x1:  210,
          y1:  116,
          x2:  160,
          y2:  180
}).style({
          stroke: primaryColor,
          'stroke-width': 2
  });

canvas.append('text')
        .attr({
            x: -30,
            y: 230,
            fill: primaryColor
})
        .text('projects')
        .style({
        '-ms-transform:': 'rotate(-50deg)', /* IE 9 */
        '-webkit-transform': 'rotate(-50deg)', /* Chrome, Safari, Opera */
        'transform': 'rotate(-50deg)'
});


canvas.append('line')
        .attr({
          x1:  290,
          y1:  115,
          x2:  360,
          y2:  192
}).style({
          stroke: primaryColor,
          'stroke-width': 2
  });
/*
canvas.append('text')
        .attr({
            x: 330,
            y: -180,
            fill: primaryColor
})
        .text('other')
        .style({
        '-ms-transform:': 'rotate(52deg)', // IE 9 
        '-webkit-transform': 'rotate(52deg)', // Chrome, Safari, Opera 
        'transform': 'rotate(52deg)'
});
*/
/////////////////////////

 var width, height, map, tasks, links, nodes, svg, tick, radius, force, link, node;

var rules = [
  ['H', 'P'],
  ['H', 'S']
];

width = height = 600;

map = d3.map();

map.set('H',{
  fixed: true
});
map.set('P', {
  fixed: false
});
map.set('S', {
  fixed: false
});

tasks = map.keys();

links = rules.map(function(rule){
  return {
    source: tasks.indexOf(rule[0]),
    target: tasks.indexOf(rule[1])
  }
});

nodes = tasks.map(function(k){
  var entry = {
    name: k
  }
  
  if ( map.get(k).fixed ){
    entry.fixed = true;
    entry.x = 240;
    entry.y = 20;
  }
  
  return entry;
})


  tick = function() {
    
    link.selectAll("line").attr("x1", function(d) {
      console.log('d.source.x: ' + d.source.x);
      return d.source.x;
    }).attr("y1", function(d) {
      return d.source.y;
    }).attr("x2", function(d) {
      return d.target.x;
    }).attr("y2", function(d) {
      return d.target.y;
    });
    node.attr("transform", function(d) {
      console.log('d.x: ' + d.x);
      return "translate(" + d.x + "," + d.y + ")";
    });
  };

  force = d3.layout.force().size([width , height]).charge(-400).linkDistance(function(d){
    return 40;
  });


  force.nodes(nodes)
	.links(links)
	 .on("tick", tick).start();

  link = canvas.selectAll(".link")
		.data(links)
		 .enter()
		  .append("g")
		   .attr("class", "link");


  link.append("line")
	.style({
    "stroke-width": 1,
    "stroke": 'black' });

//node = canvas.selectAll('.mNode').call(force.drag);
 node = canvas.selectAll(".node")
		.data(nodes).enter()
		 .append("g")
		  .attr("class", "node").call(force.drag);

  node.append("circle").attr("r", 10).style("fill", primaryColor);