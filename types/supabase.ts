export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number;
          created_at: string | null;
          email: string;
          first_name: string | null;
          occupation: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          email: string;
          first_name?: string | null;
          occupation?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          email?: string;
          first_name?: string | null;
          occupation?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
