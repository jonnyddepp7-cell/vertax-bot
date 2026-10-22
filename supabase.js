```javascript
/* ========================================
   AURUMTRADE — SUPABASE CONNECTION
======================================== */

// Your existing Supabase project URL.
const SUPABASE_URL = "https://roriglfnobtxarxgfswn.supabase.co";

// Your Supabase publishable key.
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_VA_llWxcdCdg7elcr9Pi8g_yY9YXFA_";

// Load the official Supabase JavaScript library.
const SUPABASE_CDN =
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

let supabaseClient = null;

function initializeSupabase() {
  if (
    !window.supabase ||
    typeof window.supabase.createClient !== "function"
  ) {
    console.error("Supabase library could not be loaded.");
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );
  }

  return supabaseClient;
}

function getSupabaseClient() {
  return supabaseClient || initializeSupabase();
}
```
