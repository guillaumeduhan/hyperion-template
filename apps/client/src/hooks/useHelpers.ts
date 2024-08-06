import dayjs from "dayjs";
import numeral from "numeral";
import { useState } from "react";

export const useHelpers = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState<any>(undefined);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetcher(url: string, method: string, body?: any) {
    const token = localStorage.getItem('token')?.replaceAll('"', '');
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || ''}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }


  const getDollars = (amount = 0) => {
    const hasDecimal = amount % 1 !== 0;
    if (hasDecimal) {
      return numeral(amount).format("$0,0.00");
    }
    return numeral(amount).format("$0,0");
  };

  const openUrl = (link: string) => {
    if (!link) return;
    if (process.browser) window.open(link, "_blank");
  };

  function trimString(str: string, limit = 22) {
    if (!str) return;
    return str.length <= limit ? str : `${str.slice(0, limit)}...`;
  }

  const calculateTotalAmount = (data: any) => {
    if (!data) return 0;
    return data.reduce((total: number, obj: any) => {
      if (!obj) return 0;
      if (obj.amount !== null && !isNaN(obj.amount)) {
        return total + obj.amount;
      } else {
        return total;
      }
    }, 0);
  };

  function toDate(date: Date) {
    return dayjs(date.toString()).format("D MMMM YYYY");
  }

  return {
    loading,
    open,
    disabled,
    selected,
    show,
    error,
    fetcher,
    setLoading,
    setOpen,
    setDisabled,
    setSelected,
    setShow,
    trimString,
    getDollars,
    openUrl,
    calculateTotalAmount,
    toDate,
    setError
  };
};
