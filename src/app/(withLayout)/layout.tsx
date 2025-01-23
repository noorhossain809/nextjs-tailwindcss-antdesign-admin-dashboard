"use client";

import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Sidebar from '@/compnents/ui/Sidebar'
import Contents from '@/compnents/ui/Contents'



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
  
    setLoading(true);
  }, [router, isLoading]);


  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
