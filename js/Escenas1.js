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

//geometria 2
const geometri= new THREE.CapsuleGeometry( 1, 1, 1, 4 );    

//textura
const textureLoader= new THREE.TextureLoader();
const matcap=textureLoader.load("../img/brown-wooden-flooring.jpg");
const material1= new THREE.MeshMatcapMaterial();

material.matcap=matcap;
material.flatShading=true;

const cub1 = new THREE.Mesh( geometri, material1);
scene.add( cub1);




//geometria3
const geometr = new THREE.CylinderGeometry( 2, 2, 5, 32 ); 

//textura
const textureLoade= new THREE.TextureLoader();
const matca=textureLoader.load("../img/background-made-from-bricks.jpg");
const material2= new THREE.MeshMatcapMaterial();

material2.matca=matca;
material2.flatShading=true;

const cube2 = new THREE.Mesh( geometr, material2 );




//bordes 3
const edgs = new THREE.EdgesGeometry( geometr );
const lin = new THREE.LineSegments( edgs, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( lin );
scene.add( cube2 );

//borde2
const edge = new THREE.EdgesGeometry( geometri);
const lina= new THREE.LineSegments( edge, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( lina );


//bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


 
//OrbitControls
 let control= new THREE.OrbitControls(camera,renderer.domElement)
control.minDistance=3;
control.maxDistance=25;
 

//PointerLockControls
/* const control  =new THREE.PointerLockControls(camera,renderer.domElement);

    document.getElementById('btnplay').onclick=()=>{
    control.lock();
}
 */

//DragControls
const dcontrol= new THREE.DragControls([cube, line, cub1, lina, cube2, lin], camera, renderer.domElement);
dcontrol.deactivate();
dcontrol.activate();

dcontrol.addEventListener('hoveron', function(event){
    console.log(event.object);
    event.object.material.wireframe=true;
    event.object.scale.y*=2;
})
dcontrol.addEventListener('hoveroff', function(event){

    event.object.material.wireframe=false;
    event.object.scale.y/=2;
})


const flyControls= new THREE.FlyControls(camera, renderer.domElement);
flyControls.movementSpeed=50;
flyControls.rollSpeed=0.01;
flyControls.autoForward= false;
flyControls.dragToLock=false;  



lin.position.x=15;
cube2.position.x=15;

lina.position.x=-15;
cub1.position.x=-15;

camera.position.z = 15;

//funcion 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    cub1.rotation.x += 0.01;
    cub1.rotation.z += 0.01;


    cube2.rotation.x += 0.01;
    cube2.rotation.z += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z+= 0.01;

    lina.rotation.z+= 0.01;
    lina.rotation.x+= 0.01;


    lin.rotation.z+= 0.01;
    lin.rotation.x+= 0.01;

    flyControls.update(0.5);
}

animate();



