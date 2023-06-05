const OrdenCompra = ({ordenId, nombreCliente, apellidoCliente}) => {
  console.log(ordenId)
  return (
    <div className="text-center pt-4">
      <p className="fs-5">{`Gracias por su compra ${nombreCliente} ${apellidoCliente}!`}</p>
      <p className="pt-4">Tu numero de orden para el seguimiento es:</p>
      <p className="fw-bold fs-5">{ordenId}</p>
      <p className="pt-4">Nos comunicaremos a la brevedad para coordinar la entrega</p>
    </div>
  );
};

export default OrdenCompra;
