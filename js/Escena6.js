

//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xE8B6FC)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//textura
const textureLoader= new THREE.textureLoader();
const matcap=textureLoader.Load("../img/background-made-from-bricks.jpg");
const material5= new THREE.MeshMatcapMaterial();



material5.matcap=matcap;
material5.flatShading=true;


//Geometria 
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



//borde
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


camera.position.z = 20;





//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
}
animate();

