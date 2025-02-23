package gm.inventarios.servicio;
import gm.inventarios.modelo.Producto;
import gm.inventarios.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ProductoServicio implements IProductoServicio {

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> listarProductos() {
        return this.productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoPorId(Integer idProducto) {
        Producto producto =
                this.productoRepositorio.findById(idProducto).orElse(null);
        return producto;
    }

    @Override
    /*public Producto guardarProducto(Producto producto) {
       producto.setIdProducto(null);
       return this.productoRepositorio.save(producto);
    }*/
    public Producto guardarProducto(Producto producto) {
        if (producto.getIdProducto() == null) {
            return this.productoRepositorio.save(producto);
        } else {
            Producto productoExistente = this.productoRepositorio.findById(producto.getIdProducto())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
            productoExistente.setDescripcion(producto.getDescripcion());
            productoExistente.setPrecio(producto.getPrecio());
            productoExistente.setExistencia(producto.getExistencia());

            return this.productoRepositorio.save(productoExistente);
        }
    }
    @Override
    public void eliminarProductoPorId(Integer idProducto) {
        this.productoRepositorio.deleteById(idProducto);
    }
}
