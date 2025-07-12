
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fjwxwtnwdyxlswinwoao.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqd3h3dG53ZHl4bHN3aW53b2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNTExNzksImV4cCI6MjA2NzkyNzE3OX0.tTG-wxOPuIBuSVRDpZxM3NvZoUYDxFMaD9ipyCSfqcQ";
const supabase = createClient(supabaseUrl, supabaseKey);

window.signUp = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  document.getElementById("status").innerText = error ? error.message : "Registriert: " + JSON.stringify(data.user);
};

window.signIn = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  document.getElementById("status").innerText = error ? error.message : "Eingeloggt: " + JSON.stringify(data.session);
};
