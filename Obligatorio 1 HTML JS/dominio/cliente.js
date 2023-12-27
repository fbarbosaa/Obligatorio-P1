var clientes= [];

	function alta(){
		let id = document.getElementById("id").value;
		let nombre = document.getElementById("nombre").value;
		let direccion = document.getElementById("direccion").value;
		let poliza = pol();
		let monto = document.getElementById("monto").value;
		let venc = document.getElementById("venc").value;
	
		
		if(hayDatos(id,nombre,direccion,poliza,monto,venc)){
			
			
			let pos = existeCliente(id)
			if (pos== -1){
				let nom = {
					Id : id,
					Nombre : nombre,
					Direccion : direccion,
					Poliza : pol(),
					Monto : monto,
					Venc : venc
				};
				clientes.push(nom)
				listar()
				limpiarEntradas()
				alert("Cliente ingresado con exito");
				}
		}
		else{ alert("Ya fue ingresado");
		}
	}
	
	function baja(){
		let id = document.getElementById("id").value;
		let nombre = document.getElementById("nombre").value;
		let direccion = document.getElementById("direccion").value;
		let poliza = pol()
		let monto = document.getElementById("monto").value;
		let venc = document.getElementById("venc").value;
		
		if(hayDatos(id, nombre, direccion, poliza, monto, venc)){
			let pos = existeCliente(id)
			if(pos > -1){
				clientes.splice(pos,1)
				listar();
				limpiarEntradas();
				alert("Cliente eliminado con exito");
			}
		}
	}
	
	function modificar(){
		let id = document.getElementById("id").value;
		let nombre = document.getElementById("nombre").value;
		let direccion = document.getElementById("direccion").value;
		let poliza = pol();
		let monto = document.getElementById("monto").value;
		let venc = document.getElementById("venc").value;
		
		if(hayDatos(id, nombre, direccion, poliza, monto, venc)){
			let pos = existeCliente(id)
			if(pos > -1){
				clientes[pos].Nombre = nombre;
				clientes[pos].Direccion = direccion;
				clientes[pos].Poliza = pol();
				clientes[pos].Monto = monto;
				clientes[pos].Venc = venc;
				listar();
				limpiarEntradas();
				alert("Cliente modificado correctamente");
			}
		}
	}
	
	function listar() {
		let lista= document.getElementById("lista");
		lista.innerHTML="";
		for(let i=0; i<clientes.length; i++){
			let renglon= document.createElement("option");
			renglon.text= "Id: "+clientes[i].Id+" Nombre: "+clientes[i].Nombre+" Direccion: "+clientes[i].Direccion+" Poliza: "+clientes[i].Poliza+" Monto: "+clientes[i].Monto+" Venc: "+clientes[i].Venc;
			lista.add(renglon);
		}
	}
	
	function existeCliente(id) {
		for(let i=0; i<clientes.length; i++) {
			if(clientes[i].Id == id)
				return i
			}
				return -1
		
	}
	
	function hayDatos(id, nombre, direccion, poliza, monto, venc) {
		if(id == "" || nombre == "" || direccion == "" || poliza == "" || monto == "" || venc == "")
			return false;
		else
			return true;
	}
	
	function seleccionarCliente() {
		let lista= document.getElementById("lista");
		let index= lista.selectedIndex;
		
		document.getElementById("id").value = clientes[index].Id;
		document.getElementById("nombre").value = clientes[index].Nombre;
		document.getElementById("direccion").value = clientes[index].Direccion;
		let poliza= clientes[index].Poliza;
		if(poliza == "Vida"){
			getElementById("vida").checked= true;
		}
		if(poliza == "Propiedad"){
			getElementById("propiedad").checked= true;
		}
		if(poliza == "Automotores"){
			getElementById("automotores").checked= true;
		}
		
		
		document.getElementById("monto").value = clientes[index].Monto;
		document.getElementById("venc").value = clientes[index].Venc;
		
	}
	
	function limpiarEntradas() {
		document.getElementById("id").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("direccion").value = "";		
		document.getElementById("monto").value = "";
		document.getElementById("venc").value = "";
		document.getElementById("propiedad").checked = false;
		document.getElementById("vida").checked 	 = false;
		document.getElementById("automotores").checked  = false;
	}
	
	function limpiar() {
		let id= prompt("ingrese la id del cliente");
		let pos= existeCliente(id);
			if(pos > -1){
				alert("El cliente con la id " + clientes[pos].Id + " es "+ clientes[pos].Nombre);
			}
		}
	
	function soloNumeros(e) {
		var key = window.Event ? e.which : e.keyCode
		return (key >47 && key < 58)
	}
	
	function mostrarpoliza() {
		let pol= prompt("Ingrese el id para saber el tipo de poliza del cliente");
		let pos= existeCliente(pol)
		
			if(pos > -1){
			
			alert("La poliza del cliente "+clientes[pos].Nombre+ " es la de "+clientes[pos].Poliza);
			}
		}
		
	function buscarcliente() {
		var poliza= [];
		let pro=prompt("Ingrese la poliza y te digo los clientes");
		
		for(let i=0; i<clientes.length; i++) {	
		if(clientes[i].Poliza == pro){
		poliza.push(clientes[i].Nombre);
			}	
		}
		
		alert(poliza.toString()+"");
	}		
	
	function pol() {
		if(document.getElementById("propiedad").checked)
			return "propiedad";
		if(document.getElementById("automotores").checked)
			return "automotores";
		if(document.getElementById("vida").checked)
			return "vida";
	}
		
	function mayormonto() {
		let mayor=0;
		let pos= existeCliente();
		for(let i=0; i<clientes.length; i++) {
			if( clientes[i].Monto > mayor ){
				mayor=clientes[i].Monto;
				pos=i;
			}
		}
			 alert("El cliente con el monto mas alto de "+mayor+ " es "+ clientes[pos].Nombre);
		}
	
	function cantidad() {
		let pol= prompt("ingrese que tipo de poliza esta buscando");
		let contador=0;
		
		
		for(let i=0; i<clientes.length; i++) {
			
			if(clientes[i].Poliza == pol){			
				contador++;				
			}
		}
		alert("La cantidad de clientes que tienen ese seguro son " + contador)
	
	}		
	
	function cambiar() {
		for(let i=0; i<clientes.length; i++) {
			if(document.getElementById("id").value== clientes[i].Id){
				clientes[i].Venc= document.getElementById("venc").value;
	}
	}
	listar();
	}
	
	
	function vencidos() {
		var tiempo= Date.now();
		var hoy= new Date(tiempo);
		let contador=0;
		for(let i=0; i<clientes.length; i++) {
			if(clientes[i].venc < hoy){
				contador++;
			}
		}
		alert(contador);
	}
	
	function pol2() {
		if(document.getElementById("propiedad").checked)
			return "Propiedad";
		if(document.getElementById("automotores").checked)
			return "Automotores";
		if(document.getElementById("vida").checked)
			return "Vida";
	}
	
	