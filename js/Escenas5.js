

//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xFDB98E)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.ConeGeometry( 5, 20, 32 );

//textura
const textureLoader= new THREE.TextureLoader();
const matcap=textureLoader.load("../img/beautiful-closeup-shot-of-brown-fresh-black-coffee-beans.jpg");
const material= new THREE.MeshMatcapMaterial();

material.matcap=matcap;
material.flatShading=true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );



//borde
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
camera.position.z = 20;





//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
}
animate();

