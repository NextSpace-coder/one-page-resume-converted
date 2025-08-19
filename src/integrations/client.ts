import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// 使用 import.meta.env 替代 process.env，这是 Vite 的环境变量访问方式
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);