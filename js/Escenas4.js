const scene = new THREE.Scene();
scene.background= new THREE.Color(0x800ad9);


scene.fog=new THREE.Fog(0xffffff, 30, 10);

 let loader = new THREE.TextureLoader() 
 loader.load('../img/AaS.jfif',function(texture){
    scene.background= texture
}) 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 ); 

//textura
const textureLoader= new THREE.TextureLoader();
const matcap=textureLoader.load("../img/background-made-from-bricks.jpg");
const material= new THREE.MeshMatcapMaterial();

material.matcap=matcap;
material.flatShading=true;

//geometria
/* const material = new THREE.MeshBasicMaterial( {color: "Yellow"} ); */
const cube = new THREE.Mesh( geometry, material );


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );
scene.add( cube );





/* camera.position.x = -10;
camera.position.y = 1; */
camera.position.z = 30;

//funcion 
function animate() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.1;
    line.rotation.y += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
