const scene = new THREE.Scene();
scene.background= new THREE.Color(0x000000);


//scene.fog=new THREE.Fog(0x000000, 0.05, 7);
/* let loader = new THREE.TextureLoader() */
/* loader.load('../img/Oess.jpg',function(texture){
    scene.background= texture
}) */
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria



const geometry = new THREE.TorusGeometry( 2, 1, 100, 100);   

const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


//bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//OrbitControls
/* let control= new THREE.OrbitControls(camera,renderer.domElement)
control.minDistance=3;
control.maxDistance=5;
 */

//PointerLockControls
/* const control  =new THREE.PointerLockControls(camera,renderer.domElement);

    document.getElementById('btnplay').onclick=()=>{
    control.lock();
}
 */

//DragControls
const control= new THREE.DragControls([cube, line], camera, renderer.domElement)

/* camera.position.x = -10;
camera.position.y = 1; */
camera.position.z = 5;

//funcion 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z+= 0.01;
}
animate();



