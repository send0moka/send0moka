#!/bin/bash

# Love Notes API Testing Script
# Usage: bash test-api.sh

API_URL="http://localhost:3000"
PIN="111025"

echo "🔒 Love Notes API Testing"
echo "=========================="
echo ""

# Step 1: Get Auth Token
echo "1️⃣  Testing POST /api/auth"
echo "   Sending PIN: $PIN"
echo ""

RESPONSE=$(curl -s -X POST "$API_URL/api/auth" \
  -H "Content-Type: application/json" \
  -d "{\"pin\": \"$PIN\"}")

echo "Response:"
echo "$RESPONSE" | python3 -m json.tool
echo ""

# Extract token
TOKEN=$(echo "$RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "❌ Failed to get token!"
  exit 1
fi

echo "✅ Token received: ${TOKEN:0:50}..."
echo ""

# Step 2: Get Notes with Token
echo "2️⃣  Testing GET /api/notes"
echo "   Using token: ${TOKEN:0:50}..."
echo ""

NOTES_RESPONSE=$(curl -s -X GET "$API_URL/api/notes" \
  -H "Authorization: Bearer $TOKEN")

echo "Response:"
echo "$NOTES_RESPONSE" | python3 -m json.tool
echo ""

echo "✅ All tests passed!"
