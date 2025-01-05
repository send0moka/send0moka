/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    let { data, error } = await supabase
      .from('visitors')
      .select('*')
      .order('id', { ascending: true })
      .limit(1)
      .single()

    if (error?.code === 'PGRST116') {
      const { data: insertData, error: insertError } = await supabase
        .from('visitors')
        .insert([
          { id: 1, count: 1 }
        ])
        .select()
        .single()

      if (insertError) throw insertError
      return NextResponse.json({ count: 1 })
    }

    if (error) throw error

    const newCount = (data.count || 0) + 1
    const { error: updateError } = await supabase
      .from('visitors')
      .update({ count: newCount })
      .eq('id', 1)

    if (updateError) throw updateError

    return NextResponse.json({ count: newCount })
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 })
  }
}
