const scene = new THREE.Scene();
scene.background= new THREE.Color(0x800ad9);

let loader = new THREE.TextureLoader() 
loader.load('../img/Oess.jpg',function(texture){
 scene.background= texture
}) 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria


const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );   

const material = new THREE.MeshStandardMaterial( );
material.metalness=1;
material.roughness=0.2;

scene.background=new THREE.Color(0xeeeeee)


const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xEB1100 } ) );
scene.add( line );


/* camera.position.x = -10;
camera.position.y = 1; */
camera.position.z = 30;

//funcion 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
}
animate();


