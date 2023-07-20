export interface Category {
  id: number;
  parent_id: number;
  level: number;
  name: string;
  order_level: number;
  commision_rate: number;
  banner: string;
  icon: string;
  featured: number;
  top: number;
  digital: number;
  discount: number;
  discount_type: string;
  discount_start_date?: any;
  discount_end_date?: any;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  created_at: any;
  updated_at: any;
}

export interface CategoryResponse {
    rows: Category[],
}
