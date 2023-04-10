var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: true });
var scene = new BABYLON.Scene(engine);

BABYLON.SceneLoader.ImportMesh("", "models/", "bugatti.glTF.obj", scene, function (meshes) {
    // Hacer algo con las mallas cargadas, por ejemplo, agregarlas a la escena
}, function (evt) {
    // Mostrar el progreso de la carga del modelo
    if (evt.lengthComputable) {
        var percentage = (evt.loaded * 100 / evt.total).toFixed();
        console.log(percentage + "%");
    }
});

var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
camera.speed = 0.2;
camera.alpha = -Math.PI / 2;
camera.beta = Math.PI / 4;
camera.attachControl(canvas, true);

var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

engine.runRenderLoop(function () {
    scene.render();
});