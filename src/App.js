function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>nombre</th>
          <th>precio</th>
        </tr>
      </thead>
      <tbody> {rows} </tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Buscar..." />
      <label>
        <input type="checkbox" />
        {""}
        mostrar solo productos en stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Frutas", price: "$500", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$600", stocked: true, name: "Pera" },
  { category: "Frutas", price: "$700", stocked: false, name: "Durazno" },
  { category: "Verduras", price: "$800", stocked: true, name: "Zanahoria" },
  { category: "Verduras", price: "$200", stocked: true, name: "Papa" },
  { category: "Verduras", price: "$900", stocked: false, name: "Cebolla" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
