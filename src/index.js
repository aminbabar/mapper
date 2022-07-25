

// compare.then(ele => console.log(ele))
document.addEventListener("DOMContentLoaded", ()=>{


    window.Andy = Andy;
    // const ele = document.getElementById("main");
    const height = 600;
    const width = 900;
    const translate = [width / 2, height / 1.4];
    const scale = 140;


    const projection = d3.geoMercator().scale(scale).translate(translate);
    const path = d3.geoPath(projection);

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    // grouping of all the countries with path common?
    const g = svg.append('g');
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {
            const countries = topojson.feature(data, data.objects.countries);
            // debugger;
            g.selectAll("path"
                ).data(countries.features)
                .enter()
                .append('path')
                .attr('class', 'country')
                .attr('d', path);

            d3
                .selectAll('.country')
                ._groups[0]
                .forEach(ele => {
                    ele.addEventListener("click", function () {
                        debugger;
                        ele.classList.add('blue');
                        alert(ele.__data__.properties.name);
                    })
                })
            // debugger;
            

        });

    

});
