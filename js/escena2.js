const scene = new THREE.Scene();
scene.background= new THREE.Color(0x800ad9);


scene.fog=new THREE.Fog(0xffffff, 35, 10);

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

const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7, );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );   
const material = new THREE.MeshBasicMaterial( {color: 0x33E8F0} );
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


