import { setActivePinia, createPinia } from "pinia";
import { useProductStore } from "@/store";

describe("Product Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("loads products from API", async () => {
    const store = useProductStore();
    await store.loadProducts();
    expect(store.products.length).toBeGreaterThan(0);
  });
});
