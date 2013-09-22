game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */

	/**
     * Graphics.
     */
    // our level tileset
    {name: "area01_level_tiles",  type:"image", src: "data/img/map/area01_level_tiles.png"},
    {name:"Interior-Furniture", type:"image", src: "data/img/skorpio/Interior-Furniture.png"},
    {name:"Interior-Walls-Beige", type:"image", src: "data/img/skorpio/Interior-Walls-Beige.png"},
    {name:"Interior-Walls-Blue", type:"image", src: "data/img/skorpio/Interior-Walls-Blue.png"},
    {name:"Objects", type:"image", src: "data/img/skorpio/Objects.png"},
    {name:"Pipes-RustyWalls", type:"image", src: "data/img/skorpio/Pipes-RustyWalls.png"},
    {name:"Building", type:"image", src: "data/img/skorpio/Building.png"},
    {name:"Street", type:"image", src: "data/img/skorpio/Street.png"},
    {name:"Sidewalk_dark", type:"image", src: "data/img/skorpio/Sidewalk_dark.png"},
    // the main player spritesheet
    //{name: "gripe_run_right", type:"image", src: "data/img/sprite/gripe_run_right.png"},
    {name:"Character1Walk", type:"image", src: "data/img/skorpio/Characters/Character 1/Walk/Character1Walk.png"},
  // the parallax background
    {name: "area01_bkg0",         type:"image", src: "data/img/area01_bkg0.png"},
    {name: "area01_bkg1",         type:"image", src: "data/img/area01_bkg1.png"},
     
    /*
     * Maps.
     */
    {name: "area01", type: "tmx", src: "data/map/area01.tmx"}
];
