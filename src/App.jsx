-import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
+import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
-    <AuthProvider>
-      <BrowserRouter>
+    <AuthProvider>
+      {/* ← tell React Router about the repo sub-folder */}
+      <BrowserRouter basename="/voltage-hq-dashboard">
        <Routes>
          <Route path="/login"   element={<Login />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/admin"   element={<AdminPanel />} />
          <Route path="/hq"      element={<HQDashboard />} />
          <Route path="*"        element={<Navigate to="/login" replace />} />
        </Routes>
-      </BrowserRouter>
-    </AuthProvider>
+      </BrowserRouter>
+    </AuthProvider>
  );
}
